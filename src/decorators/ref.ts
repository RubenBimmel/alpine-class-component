import AlpineComponent from '../alpineComponent';

export default function Ref(): any {
    return function(target: AlpineComponent, propertyKey: string, descriptor: PropertyDescriptor) {
        const getter = function (this: AlpineComponent) {
            return this.$refs[propertyKey];
        }
        descriptor = descriptor || {};
        descriptor.get = getter;
        return descriptor;
    }
}