import { ConstructorWithWatchers, WatcherDecorator } from './global/types';

const Watch: WatcherDecorator = (Prop: PropertyKey) => {
    return (target: ConstructorWithWatchers, _property, descriptor) => {
        if (!target.constructor.watchers?.length) {
            target.constructor.watchers = [];
        }
        target.constructor.watchers.push({ name: Prop, effect: descriptor.value });
    };
};

export default Watch;
