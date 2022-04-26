export const Prop = () => {
    return (target: any, propertyKey: string) => {
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
        target.constructor.prototype.attributeChangedCallback = function (attribute: string, oldValue: any, newValue: any) {
            console.log('THIS', this.message);
            if (!this.attribute) {
                Object.defineProperty(this, attribute, {
                    set(v) {
                        console.log('v', v);
                    }
                });
            }
            console.log(`Changes [${attribute}]='${newValue}'`);
            attributeChangedCallback && attributeChangedCallback.call(this);
        };
    };
};
