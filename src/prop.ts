import { ConstructorWithProps, ConstructorWithWatchers, DecorateProperty, PropertyDecorator } from './global/types';
import { propertyValidator } from './global/validators';

const Prop: PropertyDecorator = (): DecorateProperty => {
    return <T extends ConstructorWithProps & ConstructorWithWatchers>(target: T, propertyKey: string) => {
        if (!target.constructor.$props) {
            target.constructor.$props = [];
        }

        const prop = target.constructor.$props.find((prop) => prop.name === propertyKey);
        propertyValidator(prop);

        target.constructor.$props.push({ name: propertyKey, value: target.constructor[propertyKey] });
        Object.defineProperty(target, propertyKey, {
            set(value) {
                const watcher = target.constructor.watchers.find((watcher) => watcher.name === propertyKey);
                target[`{{${propertyKey}}}`] = value;
                watcher && watcher.effect.call(target, value);
            },
            get() {
                return target[`{{${propertyKey}}}`];
            }
        });
    };
};

export default Prop;
