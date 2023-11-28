import {CustomContent, classes, mergeProps} from '@zui/core';
import {NestedList, Listitem} from '@zui/list/src/component';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {NestedListState} from '@zui/list';
import type {MenuOptions} from '../types';

export class Menu<T extends MenuOptions = MenuOptions, S extends NestedListState = NestedListState> extends NestedList<T, S> {
    static NAME = 'menu';

    static TAG = 'menu';

    static inheritNestedProps = [...NestedList.inheritNestedProps, 'compact'];

    static ItemComponents: typeof NestedList.ItemComponents = {
        ...NestedList.ItemComponents,
        item: [Listitem, {innerComponent: 'a'}],
    };

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return classes(super._getClassName(props), this._hasNestedItems ? 'menu-nested' : '', props.className, props.wrap ? null : {popup: props.popup, compact: props.compact});
    }

    protected _getWrapperProps(props: RenderableProps<T>): Record<string, unknown> {
        const {wrap, wrapClass, height, maxHeight} = props;
        const wrapProps = mergeProps({className: wrapClass}, typeof wrap === 'object' ? wrap : null, (height || maxHeight) ? {style: {height, maxHeight}} : null);
        wrapProps.className = classes('menu-wrapper', {popup: props.popup, compact: props.compact}, wrapProps.className as ClassNameLike);
        return wrapProps;
    }

    protected _renderWrapperHeader(props: RenderableProps<T>): ComponentChildren {
        return <CustomContent key="header" content={props.header} />;
    }

    protected _renderWrapperFooter(props: RenderableProps<T>): ComponentChildren {
        return <CustomContent key="footer" content={props.footer} />;
    }

    render(props: RenderableProps<T>) {
        const menuView = super.render(props);
        if (props.wrap) {
            return (
                <menu {...this._getWrapperProps(props)}>
                    {this._renderWrapperHeader(props)}
                    {menuView}
                    {this._renderWrapperFooter(props)}
                </menu>
            );
        }
        return super.render(props);
    }
}
