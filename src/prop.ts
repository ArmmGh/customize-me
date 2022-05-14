import { ConstructorWithProps, ConstructorWithWatchers, PropertyDecorator } from './global/types';
import { propertyValidator } from './global/validators';

const Prop: PropertyDecorator = () => {
    return <T extends ConstructorWithProps & ConstructorWithWatchers>(target: T, propertyKey: string) => {
        if (!target.constructor.$props) {
            target.constructor.$props = new Set();
        }
        const prop = target.constructor.$props[propertyKey];
        propertyValidator(prop);
        target.constructor.$props.add(propertyKey);
        Object.defineProperty(target, propertyKey, {
            set(value) {
                const watcher = target.constructor?.watchers?.find((watcher) => watcher.name === propertyKey);
                target.constructor[`{{${propertyKey}}}`] = value;
                watcher && watcher.effect.call(target, value);
            },
            get() {
                return target.constructor[`{{${propertyKey}}}`];
            }
        });
    };
};

export default Prop;
