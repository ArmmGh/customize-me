export const Listen = (eventName: keyof GlobalEventHandlersEventMap, selector?: string) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return function (target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
		if (!target.constructor.listeners) {
			target.constructor.listeners = [];
		}
		target.constructor.listeners.push({ eventName, handler: descriptor.value, selector });
	};
};
