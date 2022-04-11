import { CustomEventOptions, DispatchDecorator } from './global/types';

export const Dispatch = (event: string, eventTarget?: EventTarget) => {
    return (target: HTMLElement, propertyName: PropertyKey): void => {
        if (!event) {
            event = String(propertyName);
        }

        Object.defineProperty(target, propertyName, {
            get() {
                return {
                    emit(options?: CustomEventOptions) {
                        (eventTarget || this).dispatchEvent?.(new CustomEvent(event, options));
                    }
                };
            }
        });
    };
};
