import { ConstructorWithListeners, ListenDecorator, ListenerMetadata } from './global/types';

const Listen: ListenDecorator = (eventName, selector?) => {
    return (target: ConstructorWithListeners, _propertyName, descriptor) => {
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

export default Listen;
