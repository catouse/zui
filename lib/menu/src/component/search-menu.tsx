import {$} from '@zui/core';
import {SearchBox} from '@zui/search-box/src/components';
import {Menu} from './menu';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {ListItemsSetting, NestedItem, NestedListItem, NestedListProps} from '@zui/list';
import type {SearchBoxOptions} from '@zui/search-box';
import type {SearchMenuOptions, SearchMenuState} from '../types';

export class SearchMenu<T extends SearchMenuOptions = SearchMenuOptions> extends Menu<T, SearchMenuState> {
    static inheritNestedProps = [...Menu.inheritNestedProps, 'isItemMatch', 'search'];

    static defaultProps: Partial<SearchMenuOptions> = {
        ...Menu.defaultProps,
        renderCollapsedList: true,
        expandOnSearch: true,
    };

    protected declare _searchKeys: string[];

    protected declare _searchControlled: boolean;

    protected declare _matchedParents: Set<string>;

    constructor(props: T) {
        super(props);
        this._searchControlled = props.search !== undefined;
        (this.state as SearchMenuState).search = this._searchControlled ? props.search : props.defaultSearch;
        this._searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(this.state.search);
        this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
    }

    componentWillUpdate(nextProps: Readonly<T>): void {
        this._searchControlled = nextProps.search !== undefined;
        if (this._searchControlled && nextProps.search !== this.props.search) {
            this._searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(nextProps.search);
        }
    }

    componentDidMount(): void {
        super.componentDidMount();
        this._updateMatchedParents();
    }

    componentDidUpdate(): void {
        super.componentDidUpdate();
        this._updateMatchedParents();
    }

    isExpanded(key: ItemKey, parentKey: ItemKey | undefined, defaultExpanded?: boolean | undefined): boolean {
        if (this.props.expandOnSearch && this._searchKeys.length) {
            return true;
        }
        return super.isExpanded(key, parentKey, defaultExpanded);
    }

    protected _updateMatchedParents(): void {
        if (!this.isRoot) {
            return;
        }
        $(this._ref.current as HTMLElement).find('.item.is-nested.is-not-match').filter((_, element) => this._matchedParents.has(element.getAttribute('z-key-path') || '')).addClass('has-match-child');
    }

    protected _handleSearchChange = (search: string) => {
        const searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(search);
        this._searchKeys = searchKeys;
        this.setState({search: searchKeys.join(' ')});
    };

    protected _isItemMatch(props: RenderableProps<T>, item: NestedItem, index: number, parentKey: ItemKey | undefined) {
        const {isItemMatch} = props;
        const isMatch = isItemMatch ? isItemMatch.call(this, item, this._searchKeys, index, parentKey) : (this.constructor as typeof SearchMenu).isItemMatch(item, this._searchKeys);
        if (this.isRoot && isMatch && parentKey !== undefined) {
            let key = '';
            String(parentKey).split(':').forEach(x => {
                key += `${key.length ? ':' : ''}${x}`;
                this._matchedParents.add(key);
            });
        }
        return isMatch;
    }

    protected _isNestedItemMatch(item: NestedItem, _searchKeys: string[], index: number, parentKey: ItemKey | undefined): boolean {
        return this._isItemMatch(this.props, item, index, parentKey);
    }

    protected _getNestedProps(props: RenderableProps<T>, items: ListItemsSetting, item: NestedItem, expanded: boolean): NestedListProps<NestedListItem> {
        const nestedProps = super._getNestedProps(props, items, item, expanded) as SearchMenuOptions;
        if (this.isRoot) {
            nestedProps.isItemMatch = this._isNestedItemMatch;
            nestedProps.search = this._searchKeys.join(' ');
        }
        return nestedProps;
    }

    protected _getItem(props: RenderableProps<T>, item: NestedItem, index: number): NestedItem | false {
        const finalItem = super._getItem(props, item, index);
        if (!finalItem) {
            return finalItem;
        }
        finalItem.hidden = !this._isItemMatch(props, item, index, props.parentKey);
        return finalItem;
    }


    protected _renderItem(props: RenderableProps<T>, item: Item, index: number): ComponentChildren {
        item.className = [item.className, item.hidden ? 'is-not-match' : ''];
        return super._renderItem(props, item, index);
    }

    protected _getChildren(props: RenderableProps<T>): ComponentChildren {
        let children = super._getChildren(props);
        const {searchBox} = props;
        if (!searchBox) {
            return children;
        }
        children = children || [];
        if (!Array.isArray(children)) {
            children = [children];
        }
        const searchOptions: SearchBoxOptions = {
            onChange: this._handleSearchChange,
        };
        if (typeof searchBox === 'object') {
            $.extend(searchOptions, searchBox);
        }
        if (this._searchControlled) {
            searchOptions.value = this._searchKeys.join(' ');
            searchOptions.disabled = true;
        }
        (children as ComponentChild[]).push(<SearchBox key="search" {...searchOptions} />);
        return children;
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        const isSearchMode = this.isRoot && this._searchKeys.length;
        return [super._getClassName(props), props.searchBox ? `search-menu search-menu-on-${props.searchPlacement || 'top'}` : '', isSearchMode ? 'is-search-mode' : '', isSearchMode && props.expandOnSearch ? 'no-toggle-on-search' : ''];
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        if (this.isRoot) {
            this._matchedParents = new Set();
        }
        return super._beforeRender(props);
    }

    /**
     * Check whether item is matched.
     *
     * @param item          Item to match.
     * @param searchKeys    Search keys.
     * @returns Whether item is matched.
     */
    static isItemMatch(item: Item, searchKeys: string[]) {
        if (!searchKeys.length) {
            return true;
        }
        const {keys, text, title, subtitle} = item;
        return searchKeys.every(searchKey => [keys, text, title, subtitle].some(x => typeof x === 'string' && x.length && x.toLowerCase().includes(searchKey)));
    }

    /**
     * Convert search string to search keys.
     *
     * @param search    Search string.
     * @returns Search keys array.
     */
    static getSearchKeys(search: string = ''): string[] {
        return $.unique((search).toLowerCase().split(' ').filter(x => x.length)) as string[];
    }
}
