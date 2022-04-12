import { CustomEventOptions, DecorateProperty, DispatchDecorator } from './global/types';

export const Dispatch: DispatchDecorator = (event: string, eventTarget?: EventTarget): DecorateProperty => {
    return (target: unknown, propertyName: PropertyKey): void => {
        if (!event) {
            event = String(propertyName);
        }
        Object.defineProperty(target, propertyName, {
            get() {
                const mainTarget = eventTarget || this;
                return {
                    emit(options?: CustomEventOptions) {
                        mainTarget.dispatchEvent?.(new CustomEvent(event, { bubbles: true, ...options }));
                    }
                };
            }
        });
    };
};
