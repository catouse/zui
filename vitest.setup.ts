// vitest.setup.ts
import '@testing-library/jest-dom/vitest'; // Extends Vitest's expect with jest-dom matchers
import { vi } from 'vitest';
import $ from 'cash-dom';

// Mock scrollIntoView for both Element and cash-dom instances
if (typeof window !== 'undefined' && window.Element) {
    window.Element.prototype.scrollIntoView = vi.fn();
}
if ($.fn) {
    $.fn.scrollIntoView = vi.fn();
}

// You can add other global setup here, for example:
// - Mocking global objects (localStorage, fetch)
// - Cleaning up after each test (though Vitest does this for mocks by default)

// Example: Mocking localStorage
// const localStorageMock = (function() {
//   let store: Record<string, string> = {};
//   return {
//     getItem: function(key: string) {
//       return store[key] || null;
//     },
//     setItem: function(key: string, value: string) {
//       store[key] = value.toString();
//     },
//     removeItem: function(key: string) {
//       delete store[key];
//     },
//     clear: function() {
//       store = {};
//     }
//   };
// })();
// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock
// });

// Make sure HElement and Icon are "defined" if they are custom elements.
// This is a very basic way to prevent "is not a constructor" or "not defined" errors
// if they are not properly mocked or handled by the testing environment.
// Actual components from @zui/core might need more sophisticated handling
// if their constructor or connectedCallback logic is complex.
if (typeof window !== 'undefined' && !customElements.get('zui-helement')) {
    class MockHElement extends HTMLElement {
        // Implement minimal lifecycle callbacks or properties if needed by components
        static get observedAttributes() { return []; }
        attributeChangedCallback() {}
        connectedCallback() {}
        disconnectedCallback() {}
    }
    customElements.define('zui-helement', MockHElement);
}

// If Icon is also a custom element, do something similar:
// if (typeof window !== 'undefined' && !customElements.get('zui-icon')) {
//     class MockIcon extends HTMLElement {
//         // ...
//     }
//     customElements.define('zui-icon', MockIcon);
// }

// Or, if HElement and Icon are not custom elements but classes that need specific setup,
// you might use vi.mock in the test files themselves or globally here if appropriate.
// For example, if HElement is a base class whose constructor needs arguments or does complex setup:
// vi.mock('@zui/core', async (importOriginal) => {
//   const actual = await importOriginal();
//   return {
//     ...actual,
//     HElement: class MockedHElement extends actual.HElement {
//       constructor(...args: any[]) {
//         // Call super with dummy values or handle as needed
//         super(...args);
//         // Mock any methods that cause issues in tests
//       }
//     },
//     Icon: vi.fn((props) => <i data-icon-class={props.icon} className={`icon mock-icon ${props.className || ''}`} />),
//   };
// });
