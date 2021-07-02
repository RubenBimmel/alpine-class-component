import AlpineComponent from '../alpineComponent';

export default function Watch(property: string) {
    return function (target: AlpineComponent, propertyKey: string, descriptor: PropertyDescriptor) {
        const init = target.init;

        Object.defineProperty(target, 'init', { value: function (this: any) {
            this.$watch(property, (...args: any[]) => this[propertyKey](...args));
            return init?.apply(this);
        }});
    };
}