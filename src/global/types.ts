/* Meta */
export type CustomElementMetadata = {
    selector: string;
    template: string;
    style?: string;
    useShadow?: boolean;
};

/* Decorators */
/**
 * @param metadata this function does Stuff
 */
export type ComponentDecorator = (metadata: CustomElementMetadata) => DecorateClass;

export type DispatchDecorator = (event: string, eventTarget?: EventTarget) => DecorateDispatcher;
export type ListenDecorator = (eventName: keyof GlobalEventHandlersEventMap | string, selector?: string) => DecorateMethod;
export type WatcherDecorator = (Prop: PropertyKey) => DecorateWatcher;
export type PropertyDecorator = () => DecorateProperty;

type CommonDecorateFunction<T> = (target: T | unknown, propertyName?: PropertyKey, descriptor?: PropertyDescriptor) => void;
export type DecorateClass = CommonDecorateFunction<CustomElementConstructor>;
export type DecorateProperty = CommonDecorateFunction<ConstructorWithProps & ConstructorWithWatchers>;
export type DecorateDispatcher = CommonDecorateFunction<unknown>;
export type DecorateMethod = CommonDecorateFunction<ConstructorWithListeners>;
export type DecorateWatcher = CommonDecorateFunction<ConstructorWithWatchers>;

/* Watcher */
export type ConstructorWithWatchers = {
    constructor: CustomElementConstructor &
        HTMLElement & {
            watchers: watcher[];
        };
};
export type watcher = {
    name: PropertyKey;
    effect: (value: unknown) => unknown;
};

/* Prop */
export type ConstructorWithProps = {
    constructor: CustomElementConstructor &
        HTMLElement & {
            $props: $Prop[];
        };
};
export type $Prop = {
    name: string;
    value: unknown;
};

/* Listen */
export type ConstructorWithListeners = {
    constructor: CustomElementConstructor &
        HTMLElement & {
            readonly _listeners: ListenerMetadata[];
            readonly getListeners: () => ListenerMetadata[];
            readonly setListener: (listener: ListenerMetadata) => void;
        };
};
export type ListenerMetadata = {
    selector?: string;
    eventName: keyof GlobalEventHandlersEventMap | string;
    handler: (e: Event | CustomEvent) => void;
};

/* Custom events */
export type CustomEventOptions = {
    bubbles?: boolean;
    composed?: boolean;
    detail?: unknown;
};
export type EventEmitter = {
    emit: (options?: CustomEventOptions) => void;
};
