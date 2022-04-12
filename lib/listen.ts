import { ConstructorWithListeners, DecorateMethod, ListenDecorator, ListenerMetadata } from './global/types';

export const Listen: ListenDecorator = (eventName: keyof GlobalEventHandlersEventMap | string, selector?: string): DecorateMethod => {
    return (target: unknown, _propertyKey: PropertyKey, descriptor: PropertyDescriptor) => {
        const typedTarget = target as ConstructorWithListeners;
        if (!typedTarget.constructor.getListeners) {
            Object.defineProperties(typedTarget.constructor, {
                _listeners: {
                    writable: true,
                    value: []
                },
                getListeners: {
                    value: function () {
                        return this._listeners;
                    }
                },
                setListener: {
                    value: function (listener: ListenerMetadata) {
                        this._listeners.push(listener);
                    }
                }
            });
        }
        typedTarget.constructor.setListener({ eventName, handler: descriptor.value, selector });
    };
};
