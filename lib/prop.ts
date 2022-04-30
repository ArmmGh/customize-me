import { ConstructorWithAttributes, DecorateProperty, PropertyDecorator } from './global/types';

export const Prop: PropertyDecorator = (): DecorateProperty => {
    return <T extends ConstructorWithAttributes>(target: T, propertyKey: string) => {
        if (!target.constructor.$attrs) {
            target.constructor.$attrs = [];
        }
        target.constructor.$attrs.push(propertyKey);
        if (!target.constructor.observedAttributes) {
            Object.defineProperty(target.constructor, 'observedAttributes', {
                get() {
                    return [...target.constructor.$attrs];
                }
            });
        }

        const attributeChangedCallback = target.constructor.prototype.attributeChangedCallback;
        target.constructor.prototype.attributeChangedCallback = function (attribute: string) {
            if (!this[attribute]) {
                Object.defineProperty(this, attribute, {
                    set(value) {
                        this[`_${attribute}`] = value;
                        // console.log('v', value);
                    },
                    get() {
                        return this[`_${attribute}`];
                    }
                });
            }
            // console.log(`Changes [${attribute}]='${this[attribute]}'`);
            attributeChangedCallback && attributeChangedCallback.call(this);
        };
    };
};
