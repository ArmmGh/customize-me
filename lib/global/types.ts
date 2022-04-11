export type DecorateFunction = <T extends CustomElementConstructor>(target: T) => void;

export type DecorateWrapper = {
    (metadata: CustomElementMetadata): DecorateFunction;
    createTemplateWithStyles: (template: string, style?: string) => HTMLTemplateElement;
    validateMetadata: (selector: string, style: string) => void;
    markCustomized: (target: CustomElementConstructor) => void;
    attachListeners: (target: HTMLElement & ConstructorWithListeners) => void;
};
export type CustomElementMetadata = {
    selector: string;
    template: string;
    style?: string;
    useShadow?: boolean;
};
export type ListenerMetadata = {
    selector?: string;
    eventName: keyof GlobalEventHandlersEventMap | string;
    handler: (e: Event) => void;
};

export type ConstructorWithListeners = {
    constructor: CustomElementConstructor & {
        readonly _listeners: ListenerMetadata[];
        readonly getListeners: () => ListenerMetadata[];
        readonly setListener: (listener: ListenerMetadata) => void;
    };
};

export type DispatchDecorator = (event?: string, eventTarget?: EventTarget) => void;

export type CustomEventOptions = {
    bubbles?: boolean;
    composed?: boolean;
    detail?: unknown;
};

export type CustomEventMetadata = CustomEvent & {
    emit: (options?: CustomEventOptions) => void;
};
