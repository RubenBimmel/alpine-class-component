import AlpineComponent from '../alpineComponent';

export default function Component(component: new (...args: any[]) => AlpineComponent): any {
    return function (...args: any[]) {
        let instance = new component(...args);

        // prototype props.
        const proto = component.prototype;
        let data: any = {};

        Object.getOwnPropertyNames(proto).forEach(function (key) {
            if (key === 'constructor') {
                return
            }

            const descriptor = Object.getOwnPropertyDescriptor(proto, key)!
            if (descriptor.value !== void 0) {
                // methods
                if (typeof descriptor.value === 'function') {
                    data[key] = descriptor.value
                }
            } else if (descriptor.get || descriptor.set) {
                // computed properties
                Object.defineProperty(data, key, { get: descriptor.get, set: descriptor.set });
            }
        })

        return Object.assign(data, instance);
    }
}