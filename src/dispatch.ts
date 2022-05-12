import { CustomEventOptions, DispatchDecorator } from './global/types';

const Dispatch: DispatchDecorator = (event, eventTarget?) => {
    return (target, propertyName): void => {
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

export default Dispatch;
