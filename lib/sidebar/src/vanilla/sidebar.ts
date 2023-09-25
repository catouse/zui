import {Component, parseSize, $} from '@zui/core';
import {store} from '@zui/store';
import {Moveable} from '@zui/dnd';
import '@zui/css-icons/src/icons/chevron.css';
import '@zui/split/src/style/index';

import type {SizeSetting, Cash} from '@zui/core';
import type {SidebarOptions} from '../types';

function calcSize(size: SizeSetting, totalSize: number) {
    const [value, unit] = parseSize(size);
    return unit === '%' ? (totalSize * value / 100) : value;
}

const RESIZING_CLASS = 'is-resizing-sidebar';

const ANIMATION_CLASS = 'has-animation';

export class Sidebar extends Component<SidebarOptions, {
    sidebarResize: [number];
}> {
    static NAME = 'Sidebar';

    static DEFAULT: Partial<SidebarOptions> = {
        minWidth: 40,
        toggleBtn: true,
        animation: true,
        dragToResize: true,
        dbclick: 'reset',
    };

    declare _container: HTMLElement;

    declare _width: number;

    declare _side: 'left' | 'right';

    declare _storeID: string;

    declare _raf: number;

    declare _$gutter: Cash;

    declare _widthBack: number;

    declare _moveable?: Moveable;

    declare _startWidth: number;

    declare _defaultWidth: number;

    declare _minWidth: number;

    declare _maxWidth: number;

    get $container() {
        return $(this._container);
    }

    get side() {
        return this._side;
    }

    get width() {
        return this._width;
    }

    afterInit() {
        const {$element} = this;
        const $container = $element.parent();
        const container = $container[0]!;
        const containerWidth = $container.width();
        this._container = container;

        const {
            preserve,
            side = $element.hasClass('sidebar-right') ? 'right' : 'left',
            gutterWidth = parseSize($container.css('gap')!)[0] || 1,
            toggleBtn,
            dbclick,
            animation,
            dragToResize,
            width,
            minWidth = 0,
            maxWidth = Number.MAX_SAFE_INTEGER,
        } = this.options;
        this._storeID = preserve ? `SIDEBAR:${preserve}:width` : '';
        this._side = side;
        this._defaultWidth = calcSize(width || $element.width(), containerWidth);
        this._minWidth = calcSize(minWidth, containerWidth);
        this._maxWidth = calcSize(maxWidth, containerWidth);
        this._width = (preserve ? store.get(this._storeID) : null) || this._defaultWidth;
        $container.addClass(`has-sidebar-${side}`);
        $element.addClass(`sidebar-${side}`).toggleClass(ANIMATION_CLASS, !!animation);

        let $gutter = $element.find('.sidebar-gutter');
        if (!$gutter.length) {
            $gutter = $('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo($element);
        }
        $element.css('--gutter-width', `${gutterWidth}px`);
        if (toggleBtn) {
            $gutter.append(`<button class="gutter-toggle" type="button"><span class="chevron-${side}"></span></button>`);
            $gutter.on('click', '.gutter-toggle', () => this.toggle());
        }
        if (dbclick) {
            $gutter.on('dblclick', () => {
                console.log('dbclick', dbclick);
                if (dbclick === 'reset') {
                    this.update(this._defaultWidth);
                } else {
                    this.toggle();
                }
            });
        }
        if (dragToResize) {
            this._moveable = new Moveable($gutter, {
                selector: 'self',
                move: false,
                onMoveStart: () => {
                    this._startWidth = this._width;
                    $element.removeClass(ANIMATION_CLASS);
                    $container.addClass(RESIZING_CLASS);
                },
                onMove: (_event, info) => {
                    if (Math.abs(info.deltaX) < 10) {
                        return;
                    }
                    this.update(this._startWidth + info.deltaX);
                },
                onMoveEnd: () => {
                    if (animation) {
                        $element.addClass(ANIMATION_CLASS);
                    }
                    $container.removeClass(RESIZING_CLASS);
                },
            });
        }
        this._$gutter = $gutter;

        this.render();
    }

    destroy(): void {
        super.destroy();
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
        this._$gutter.off('click dbclick');
        this._moveable?.destroy();
    }

    toggle(collapsed?: boolean) {
        collapsed = collapsed ?? !!this._width;
        console.log('> toggle', collapsed);
        if (collapsed) {
            this._widthBack = this._width;
        }
        this.update(collapsed ? 0 : this._widthBack || this._defaultWidth);
    }

    update(width: number, immediately?: boolean) {
        if (!immediately) {
            if (this._raf) {
                cancelAnimationFrame(this._raf);
            }
            this._raf = requestAnimationFrame(() => {
                this._raf = 0;
                this.update(width, true);
            });
            return;
        }

        width = width < this._minWidth ? 0 : Math.min(this._maxWidth, width, this.$container.width());
        if (width === this._width) {
            return;
        }

        const {preserve, onResize, onToggle} = this.options;
        const isOldCollapsed = !this._width;
        const isCollapsed = !width;
        this._width = width;
        if (preserve) {
            store.set(this._storeID, width);
        }
        this.render();
        onResize?.(width);
        if (onToggle && isOldCollapsed !== isCollapsed) {
            onToggle(isCollapsed);
        }
        this.emit('sidebarResize', width);
    }

    render() {
        const {side, width} = this;
        const isCollapsed = !width;
        this.$element.toggleClass('is-collapsed', isCollapsed);
        this.$container
            .css(`--sidebar-${side}-width`, `${width}px`)
            .toggleClass('is-sidebar-left-collapsed', isCollapsed);
    }
}
