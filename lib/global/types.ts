export type DecorateFunction = <T extends CustomElementConstructor>(target: T) => void;
export type DecorateProperty = (target: unknown, propertyName: PropertyKey) => void;
export type DecorateMethod = (target: unknown, propertyName: PropertyKey, descriptor: PropertyDescriptor) => void;

export type ComponentDecorator = (metadata: CustomElementMetadata) => DecorateFunction;
export type MetaClass = {
    readonly __customized: boolean;
    validateMetadata: (selector: string, style: string) => void;
    attachListeners: (target: HTMLElement & ConstructorWithListeners) => void;
    createTemplateWithStyles: (template: string, style?: string) => HTMLTemplateElement;
};
// markCustomized: (target: CustomElementConstructor) => void;

export type DispatchDecorator = (event: string, eventTarget?: EventTarget) => DecorateProperty;
export type ListenDecorator = (eventName: keyof GlobalEventHandlersEventMap | string, selector?: string) => DecorateMethod;

export type CustomElementMetadata = {
    selector: string;
    template: string;
    style?: string;
    useShadow?: boolean;
};
export type ListenerMetadata = {
    selector?: string;
    eventName: keyof GlobalEventHandlersEventMap | string;
    handler: (e: Event | CustomEvent) => void;
};

export type ConstructorWithListeners = {
    constructor: CustomElementConstructor & {
        readonly _listeners: ListenerMetadata[];
        readonly getListeners: () => ListenerMetadata[];
        readonly setListener: (listener: ListenerMetadata) => void;
    };
};

export type CustomEventOptions = {
    bubbles?: boolean;
    composed?: boolean;
    detail?: unknown;
};

export type CustomEventMetadata = {
    emit: (options?: CustomEventOptions) => void;
};
