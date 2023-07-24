import {arrow, computePosition, flip, shift, autoUpdate, offset, VirtualElement, ReferenceElement, ComputePositionConfig} from '@floating-ui/dom';
import {Component, $, ComponentEvents} from '@zui/core';
import {PopoverEvents, PopoverOptions, PopoverPanelOptions} from '../types';
import {PopoverPanel} from './popover-panel';

const TOGGLE_SELECTOR = '[data-toggle="popover"]';

const CLASS_SHOW = 'show';

const CLASS_SHOWN = 'in';

export type PopoverShowOptions = {
    delay?: number | boolean;
    event?: Event;
};

export class Popover<O extends PopoverOptions = PopoverOptions, E extends ComponentEvents = {}> extends Component<O, [PopoverEvents, E], HTMLElement> {
    static NAME = 'Popover';

    static Z_INDEX = 1700;

    static MULTI_INSTANCE = true;

    static DEFAULT: Partial<PopoverOptions> = {
        placement: 'top',
        strategy: 'absolute',
        flip: true,
        arrow: true,
        offset: 1,
        trigger: 'click',
        mask: true,
        delay: 0,
        animation: true,
        closeBtn: true,
        popup: true,
    };

    protected declare _virtual: boolean;

    protected declare _dynamic: boolean;

    protected declare _triggerElement: HTMLElement | VirtualElement;

    protected declare _triggerEvent?: Event;

    protected declare _targetElement?: HTMLElement;

    protected declare _showAfterInit: boolean;

    protected declare _shown: boolean;

    protected declare _id: string;

    protected declare _timer: number;

    protected declare _panel?: PopoverPanel;

    protected declare _layoutWatcher?: () => void;

    get shown() {
        return this._shown;
    }

    get id() {
        return this._id;
    }

    afterInit() {
        const {trigger, id, triggerEvent} = this.options;

        this._triggerEvent = triggerEvent;
        this._id = id || `popover_${this.gid}`;

        const triggerElement = this.getTriggerElement();
        if (triggerElement instanceof HTMLElement) {
            const $triggerElement = $(triggerElement);
            const {namespace} = this;
            if (trigger === 'hover') {
                $triggerElement.on(`mouseenter${namespace}`, (event: MouseEvent) => {
                    this.show({delay: true, event});
                }).on(`mouseleave${namespace}`, () => {
                    this.hide();
                });
            } else if (trigger) {
                $triggerElement.on(`${trigger}${namespace}`, (event: Event) => {
                    this.toggle({event});
                    event.preventDefault();
                });
            }
        }
        const {show} = this.options;
        if (show) {
            this.show({delay: typeof show === 'number' ? show : false});
        }
    }

    getTriggerElement(): HTMLElement | VirtualElement {
        if (!this._triggerElement) {
            let {element = this.element} = this.options;
            if (element === document.body) {
                element = {
                    getBoundingClientRect: this._getClickBounding,
                };
            }
            this._triggerElement = element;
            this._virtual = !(element instanceof HTMLElement);
        }
        return this._triggerElement;
    }

    initTarget(): HTMLElement | undefined {
        let target = this.options.target;
        this._dynamic = !target;
        if (!target) {
            return this._createTarget();
        }
        if (typeof target === 'function') {
            target = target();
        }
        return $(target)[0];
    }

    show(options?: PopoverShowOptions) {
        const {delay, event} = options || {};
        if (event) {
            this._triggerEvent = event;
        }

        if (delay) {
            return this._setTimer(() => {
                this.show();
            }, delay === true ? this.options.delay : delay);
        }

        if (!this.inited) {
            this.setOptions({show: true} as Partial<O>);
            return;
        }

        if (this._shown) {
            return;
        }

        const target = this.initTarget();
        if (!target) {
            return;
        }
        this._targetElement = target;
        const $target = $(target);
        const {animation, mask, onShow, onShown} = this.options;
        $target.addClass(CLASS_SHOW);
        if (animation) {
            $target.addClass(animation === true ? 'fade' : animation);
        }
        this._shown = true;
        this.render();
        onShow?.call(this);
        this.emit('show');

        if (!this._virtual) {
            $(this._triggerElement as HTMLElement).addClass('with-popover-show');
        }

        this._setTimer(() => {
            $target.addClass(CLASS_SHOWN);

            this._setTimer(() => {
                onShown?.call(this);
                this.emit('shown');
            }, 200);

            if (mask) {
                $(document).on(`click${this.namespace}`, this._onClickDoc);
            }
        }, 50);
    }

    hide() {
        if (!this._shown || !this._targetElement) {
            this._setTimer();
        }

        const {destroyOnHide, animation, onHide, onHidden} = this.options;
        const $target = $(this._targetElement as HTMLElement);
        this._shown = false;
        onHide?.call(this);
        this.emit('hide');
        $target.removeClass(CLASS_SHOWN);

        if (!this._virtual) {
            $(this._triggerElement as HTMLElement).removeClass('with-popover-show').removeAttr('data-popover-placement');
        }

        $(document).off(this.namespace);

        this._setTimer(() => {
            onHidden?.call(this);
            this.emit('hidden');
            $target.removeClass(CLASS_SHOW);

            if (destroyOnHide) {
                this._setTimer(() => {
                    this.destroy();
                }, typeof destroyOnHide === 'number' ? destroyOnHide : 0);
            }
            this._destoryTarget();
        }, animation ? 200 : 0);
    }

    toggle(options?: PopoverShowOptions) {
        if (this._shown) {
            this.hide();
        } else {
            this.show(options);
        }
    }

    destroy(): void {
        super.destroy();
        $(document).off(this.namespace);
        if (!this._virtual) {
            const {namespace} = this;
            $(this._triggerElement as HTMLElement).off(namespace);
        }
        this._setTimer();
        this._destoryTarget();
    }

    layout() {
        const trigger = this._triggerElement;
        const element = this._targetElement;
        const layoutWatcher = this._layoutWatcher;
        if (!element || !trigger || !this._shown) {
            if (layoutWatcher) {
                layoutWatcher();
                this._layoutWatcher = undefined;
            }
            return;
        }

        if (layoutWatcher) {
            return;
        }

        this._layoutWatcher = autoUpdate(trigger, element, () => {
            const {width, animation, name = 'popover'} = this.options;
            if (width === '100%' && !this._virtual) {
                $(element).css({width: $(trigger as HTMLElement).width()});
            }
            computePosition(...this._getLayoutOptions()).then(({x, y, middlewareData, placement}) => {
                const $element = $(element).css({
                    left: x,
                    top: y,
                });
                const popSide = placement.split('-')[0] as string;
                const arrowSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[popSide] as string;
                const arrowPosition = middlewareData.arrow;
                if (arrowPosition) {
                    $element.find('.arrow').css({
                        left: arrowPosition.x,
                        top: arrowPosition.y,
                    }).attr('class', `arrow ${name}-arrow arrow-${arrowSide}`);
                }
                if (animation === true) {
                    $element.attr('class', `${$element.attr('class')!.split(' ').filter(n => n !== 'fade' && !n.startsWith('fade-from')).join(' ')} fade-from-${arrowSide}`);
                }
                if (!this._virtual) {
                    $(this._triggerElement as HTMLElement).attr('data-popover-placement', popSide);
                }
            });
        });
    }

    render(options?: Partial<O>) {
        super.render(options);
        const targetElement = this._targetElement;
        if (!targetElement) {
            return;
        }
        const panelOptions = this._getRenderOptions();
        const $targetElement = $(targetElement);
        $targetElement.toggleClass('popup', panelOptions.popup).css(panelOptions.style!);
        if (panelOptions.className) {
            $targetElement.setClass(panelOptions.className);
        }
        if (this._dynamic) {
            let panel = this._panel;
            if (panel && panel.element !== targetElement) {
                panel.destroy();
                panel = undefined;
            }
            if (panel) {
                panel.render(panelOptions);
            } else {
                panel = new PopoverPanel(targetElement, panelOptions);
                panel.on('inited', () => this.layout());
            }
            this._panel = panel;
        } else {
            if (panelOptions.arrow) {
                const $arrowElement = $targetElement.find('.arrow');
                if (!$arrowElement.length) {
                    $targetElement.append($('<div class="arrow"></div>').css(panelOptions.arrowStyle!));
                }
            }
            this.layout();
        }
    }

    protected _getLayoutOptions(): [trigger: ReferenceElement, element: HTMLElement, options: Partial<ComputePositionConfig>] {
        const trigger = this._triggerElement;
        const element = this._targetElement!;
        const {placement: placementSetting, flip: isFlip, shift: shiftSetting, offset: offsetSetting, arrow: arrowSetting} = this.options;
        const arrowElement = arrowSetting ? element.querySelector('.arrow') : null;
        const arrowSize = arrowElement ? (typeof arrowSetting === 'number' ? arrowSetting : 5) : 0;
        return [trigger, element, {
            placement: placementSetting,
            middleware: [
                isFlip ? flip() : null,
                shiftSetting ? shift(typeof shiftSetting === 'object' ? shiftSetting : undefined) : null,
                (offsetSetting || arrowSize) ? offset((offsetSetting || 0) + arrowSize) : null,
                arrowSetting ? arrow({element: arrowElement!}) : null,
            ].filter(Boolean),
        }];
    }

    protected _getRenderOptions(): PopoverPanelOptions {
        const {name = 'popover'} = this.options;
        const {
            popup,
            title,
            content,
            headingClass = `${name}-heading`,
            titleClass = `${name}-title`,
            contentClass = `${name}-content`,
            style,
            className = name,
            closeBtn,
            arrow: arrowSetting,
        } = this.options;
        return {
            popup,
            title,
            titleClass,
            headingClass,
            contentClass,
            content,
            style: {zIndex: (this.constructor as typeof Popover).Z_INDEX++, ...style},
            className,
            closeBtn,
            arrow: arrowSetting ? `arrow ${name}-arrow` : false,
            arrowStyle: {'--arrow-size': `${typeof arrowSetting === 'number' ? arrowSetting : 5}px`},
            onlyInner: true,
        };
    }

    protected _destoryTarget() {
        this._layoutWatcher?.();
        this._layoutWatcher = undefined;
        if (this._dynamic) {
            this._panel?.destroy();
            this._targetElement?.remove();
            this._panel = undefined;
            this._targetElement = undefined;
        }
    }

    protected _setTimer(callback?: () => void, delay = 0) {
        if (this._timer) {
            clearTimeout(this._timer);
        }
        if (!callback) {
            return;
        }
        this._timer = window.setTimeout(() => {
            this._timer = 0;
            callback();
        }, delay);
    }

    protected _createTarget(): HTMLElement {
        const {container = 'body'} = this.options;
        const $container = $(container);
        let $target = $container.find(`#${this._id}`);
        if ($target.length) {
            return $target[0]!;
        }
        $target = $('<div />').attr({id: this._id, class: 'popover'}).appendTo($container);
        return $target[0]!;
    }

    protected _getClickBounding = () => {
        const event = this._triggerEvent as MouseEvent;
        return {
            x: event.clientX,
            y: event.clientY,
            left: event.clientX,
            top: event.clientY,
            width: 0,
            height: 0,
            bottom: event.clientY,
            right: event.clientX,
        };
    };

    protected _onClickDoc = (event: MouseEvent) => {
        const $clickTarget = $(event.target as HTMLElement);
        if ((!$clickTarget.closest(`#${this._id}`).length && this._targetElement !== $clickTarget.closest('.popover')[0]) || $clickTarget.closest('[data-dismiss="popover"]').length) {
            this.hide();
        }
    };

    static show<O extends PopoverOptions, E extends ComponentEvents, T extends typeof Popover<O, E>>(this: T, options: O): InstanceType<T> {
        const {element} = options;
        const popover = new this(element instanceof HTMLElement ? element : document.body, {show: true, destroyOnHide: true, ...options});
        return popover as InstanceType<T>;
    }
}

$(document).on(`click${Popover.NAMESPACE} mouseenter${Popover.NAMESPACE}`, TOGGLE_SELECTOR, (event: MouseEvent) => {
    const $toggleBtn = $(event.currentTarget as HTMLElement);
    if ($toggleBtn.length && !$toggleBtn.data(Popover.KEY)) {
        const trigger = $toggleBtn.data('trigger') || 'click';
        const eventForTrigger = event.type === 'mouseover' ? 'hover' : 'click';
        if (eventForTrigger !== trigger) {
            return;
        }
        Popover.ensure($toggleBtn, {show: true, triggerEvent: event});
        event.preventDefault();
    }
});