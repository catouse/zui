import {ComponentChildren} from 'preact';
import {classes} from '@zui/core';
import {PickTrigger} from '@zui/pick/src/components';
import {PickerSearch} from './picker-search';
import {PickerSelectProps, PickerState} from '../types';
import '@zui/css-icons/src/icons/caret.css';

export class PickerSingleSelect extends PickTrigger<PickerState, PickerSelectProps> {
    #handleDeselectBtnClick = (event: MouseEvent) => {
        this.props.onClear();
        this.props.togglePop(true, {search: ''});
        event.stopPropagation();
    };

    #handleSearch = (search: string) => {
        this.props.changeState({search});
    };

    #handleSearchClear = () => {
        this.props.togglePop(true, {search: ''} as Partial<PickerState>);
    };

    #getSearchPlaceholder() {
        const {searchHint, state: {value, selections}} = this.props;
        let placeholder = searchHint;
        if (placeholder === undefined) {
            const selection = selections.find(x => x.value === value);
            if (selection && typeof selection.text === 'string') {
                placeholder = selection.text;
            } else {
                placeholder = value;
            }
        }
        return placeholder;
    }

    protected _getClass() {
        return classes(
            super._getClass(),
            'picker-select picker-select-single form-control',
        );
    }

    protected _renderSearch() {
        const {state: {search}} = this.props;
        return (
            <PickerSearch
                defaultSearch={search}
                onSearch={this.#handleSearch}
                onClear={this.#handleSearchClear}
                placeholder={this.#getSearchPlaceholder()}
            />
        );
    }

    protected _renderTrigger() {
        const {children, state: {selections = [], open}, placeholder, search} = this.props;

        const [selection] = selections;
        const showSearch = open && search;
        let view: ComponentChildren;
        if (showSearch) {
            view = this._renderSearch();
        } else if (selection) {
            view = <span key="main" className="picker-single-selection">{selection.text ?? selection.value}</span>;
        } else {
            view = <span key="main" className="picker-select-placeholder">{placeholder}</span>;
        }
        const deselectBtnView = (selection && !showSearch) ? (
            <button key="deselect" type="button" className="btn picker-deselect-btn size-sm square ghost" onClick={this.#handleDeselectBtnClick}><span className="close"></span></button>
        ) : null;
        const caret = showSearch ? null : <span key="caret" className="caret"></span>;

        return [
            view,
            children,
            deselectBtnView,
            caret,
        ];
    }
}
