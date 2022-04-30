export type ComponentDecorator = (metadata: CustomElementMetadata) => DecorateClass;
export type DispatchDecorator = (event: string, eventTarget?: EventTarget) => DecorateProperty;
export type ListenDecorator = (eventName: keyof GlobalEventHandlersEventMap | string, selector?: string) => DecorateMethod;
export type PropertyDecorator = () => DecorateProperty;

type CommonDecorateFunction<T> = (target: T, propertyName?: PropertyKey, descriptor?: PropertyDescriptor) => void;
export type DecorateClass = CommonDecorateFunction<CustomElementConstructor>;
export type DecorateProperty = CommonDecorateFunction<unknown>;
export type DecorateMethod = CommonDecorateFunction<ConstructorWithListeners>;

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

export type ConstructorWithAttributes = {
    constructor: CustomElementConstructor &
        HTMLElement & {
            $attrs: string[];
            readonly observedAttributes: () => string[];
        };
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
