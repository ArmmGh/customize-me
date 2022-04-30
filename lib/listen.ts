import { DecorateMethod, ListenDecorator, ListenerMetadata } from './global/types';

export const Listen: ListenDecorator = (eventName: keyof GlobalEventHandlersEventMap | string, selector?: string): DecorateMethod => {
    return (target, _propertyKey: PropertyKey, descriptor: PropertyDescriptor) => {
        if (!target.constructor.getListeners) {
            Object.defineProperties(target.constructor, {
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
        target.constructor.setListener({ eventName, handler: descriptor.value, selector });
    };
};
