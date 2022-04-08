export type DecorateFunction = <T extends CustomElementConstructor>(target: T) => void;

export type DecorateWrapper = {
	(metadata: CustomElementMetadata): DecorateFunction;
	createTemplateWithStyles: (template: string, style?: string) => HTMLTemplateElement;
	validateMetadata: (selector: string, style: string) => void;
	markCustomized: (target: CustomElementConstructor) => void;
	attachEventListeners: (target: HTMLElement & ConstructorWithListeners) => void;
};
export type CustomElementMetadata = {
	selector: string;
	template: string;
	style?: string;
	useShadow?: boolean;
};
export type Listeners = ListenerMetadata[];
export type ListenerMetadata = {
	selector: string;
	eventName: keyof GlobalEventHandlersEventMap;
	handler: (e: Event) => void;
};

export type ConstructorWithListeners = {
	constructor: CustomElementConstructor & { listeners?: ListenerMetadata[] };
};
