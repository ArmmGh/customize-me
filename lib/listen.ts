import { ConstructorWithListeners, ListenerMetadata } from './global/types';

export const Listen = (eventName: keyof GlobalEventHandlersEventMap | string, selector?: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (target: any, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
        if (!target.getListeners) {
            Object.defineProperties(target, {
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
                        attachListeners(this as HTMLElement & ConstructorWithListeners);
                    }
                }
            });
        }
        target.setListener({ eventName, handler: descriptor.value, selector });
    };
};
const attachListeners: (target: HTMLElement & ConstructorWithListeners) => void = (target: HTMLElement & ConstructorWithListeners) => {
    const listeners = target.getListeners();
    const root = target.shadowRoot || target;
    for (const listener of listeners) {
        const eventTarget = listener.selector ? root.querySelector(listener.selector) : root;

        eventTarget?.addEventListener(listener.eventName, (event: Event) => {
            listener.handler.call(target, event);
        });
    }
};
