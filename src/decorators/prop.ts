import Alpine from 'alpinejs';
import AlpineComponent from '../alpineComponent';

interface PropOptions {
    default?: any
}

export default function Prop(options?: PropOptions): any {
    return function(target: AlpineComponent, propertyKey: string, descriptor: PropertyDescriptor) {
        const getter = function (this: AlpineComponent) {
            const value = this.$el.dataset[propertyKey];

            if (value) {
                try {
                    return Alpine.evaluate(this.$el, value);
                }
                catch {
                    return value;
                }
            }

            return options?.default ?? undefined;
        }
        descriptor = descriptor || {};
        descriptor.get = getter;
        return descriptor;
    }
}