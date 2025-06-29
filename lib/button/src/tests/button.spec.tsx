// lib/button/src/tests/button.spec.tsx

import { render, fireEvent, screen } from '@testing-library/preact';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '../component/button';
import '@zui/core'; // Ensure HElement and Icon are registered if they are custom elements or have global setup

// Mocking for HElement or Icon if necessary.
// For instance, if Icon component is complex or makes network requests,
// you might want to mock it:
// vi.mock('@zui/core', async (importOriginal) => {
//   const actual = await importOriginal();
//   return {
//     ...actual,
//     Icon: vi.fn(({ icon, className }) => <i data-icon-class={icon} className={`icon mock-icon ${className || ''}`} />),
//     HElement: actual.HElement, // Keep HElement or mock if needed
//   };
// });


describe('Button Component', () => {
  it('should render successfully with default props', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe('BUTTON');
  });

  it('should render with specified text', () => {
    const buttonText = 'Click Me';
    render(<Button text={buttonText} />);
    const buttonElement = screen.getByRole('button');
    // Check if a span with class 'text' contains the buttonText
    const textSpan = buttonElement.querySelector('span.text');
    expect(textSpan).toBeInTheDocument();
    expect(textSpan).toHaveTextContent(buttonText);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled text="Disabled Button" />);
    const buttonElement = screen.getByRole('button', {name: /Disabled Button/i});
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveClass('disabled');
  });

  it('should show loading state when loading prop is true', () => {
    render(<Button loading loadingText="Loading..." text="Submit" />);
    const buttonElement = screen.getByRole('button');

    // Check for loading text
    const textSpan = buttonElement.querySelector('span.text');
    expect(textSpan).toBeInTheDocument();
    expect(textSpan).toHaveTextContent('Loading...');

    // Check for loading icon
    const iconElement = buttonElement.querySelector('.icon-spinner-snake.spin');
    expect(iconElement).toBeInTheDocument();

    expect(buttonElement).toHaveClass('loading');
    expect(buttonElement).toBeDisabled(); // Loading buttons are typically disabled
  });

  it('should render as a link when url prop is provided', () => {
    const url = 'https://example.com';
    render(<Button url={url} text="Link Button" />);
    const linkElement = screen.getByRole('link', {name: /Link Button/i});
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', url);
    expect(linkElement.tagName).toBe('A');
  });

  it('should call onClick handler when clicked (if not disabled)', () => {
    const handleClick = vi.fn();
    render(<Button text="Clickable" onClick={handleClick} />);
    const buttonElement = screen.getByRole('button', {name: /Clickable/i});
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick handler when clicked if disabled', () => {
    const handleClick = vi.fn();
    render(<Button text="Disabled Click" onClick={handleClick} disabled />);
    const buttonElement = screen.getByRole('button', {name: /Disabled Click/i});
    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement); // fireEvent does not prevent clicks on disabled elements by default
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('should render an icon when icon prop is provided', () => {
    render(<Button icon="icon-search" />);
    const buttonElement = screen.getByRole('button');
    const iconElement = buttonElement.querySelector('.icon-search');
    expect(iconElement).toBeInTheDocument();
  });

  it('should render a trailing icon when trailingIcon prop is provided', () => {
    render(<Button trailingIcon="icon-arrow-right" />);
    const buttonElement = screen.getByRole('button');
    const iconElement = buttonElement.querySelector('.icon-arrow-right');
    expect(iconElement).toBeInTheDocument();
  });

  it('should apply correct classes for different button types (e.g., primary)', () => {
    render(<Button type="primary" />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('primary');
    // Based on current logic, it also gets 'square' if no text/children
    expect(button).toHaveClass('square');
    expect(button).not.toHaveClass('btn-primary'); // Explicitly check it's not btn-primary
  });

  it('should apply theme classes if btnType is used for theming', () => {
    render(<Button btnType="primary" />); // Assuming 'primary' is a theme class
    expect(screen.getByRole('button')).toHaveClass('primary'); // or 'btn-primary' depending on logic
  });

  it('should apply correct classes for different button sizes (e.g., lg)', () => {
    render(<Button size="lg" />);
    // The component concatenates 'size-' with the prop value
    expect(screen.getByRole('button')).toHaveClass('size-lg');
  });

  it('should render children content', () => {
    const childText = "Child Content";
    render(<Button><span>{childText}</span></Button>);
    expect(screen.getByText(childText)).toBeInTheDocument();
  });

  it('should have "btn-caret" class when only caret is present', () => {
    render(<Button caret />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('btn-caret');
    // Check for caret span
    const caretSpan = buttonElement.querySelector('span.caret');
    expect(caretSpan).toBeInTheDocument();
  });

  it('should render as a submit button if btnType is "submit"', () => {
    render(<Button btnType="submit" text="Submit Form" />);
    const buttonElement = screen.getByRole('button', {name: /Submit Form/i});
    expect(buttonElement).toHaveAttribute('type', 'submit');
  });

  it('should render as a reset button if btnType is "reset"', () => {
    render(<Button btnType="reset" text="Reset Form" />);
    const buttonElement = screen.getByRole('button', {name: /Reset Form/i});
    expect(buttonElement).toHaveAttribute('type', 'reset');
  });
});
