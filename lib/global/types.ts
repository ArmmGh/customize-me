export type DecorateFunction = <T extends CustomElementConstructor>(target: T) => void;

export type DecorateWrapper = {
    (metadata: CustomElementMetadata): DecorateFunction;
    createTemplateWithStyles: (template: string, style?: string) => HTMLTemplateElement;
    validateMetadata: (selector: string, style: string) => void;
    markCustomized: (target: CustomElementConstructor) => void;
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
    readonly _listeners: ListenerMetadata[];
    readonly getListeners: () => ListenerMetadata[];
    readonly setListener: (listener: ListenerMetadata) => void;
    constructor: CustomElementConstructor;
};
