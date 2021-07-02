import { AlpineComponent, Component } from '../../../src';

@Component
export default class Person extends AlpineComponent {
    firstName = 'John';
    lastName = 'Doe';

    get name() {
        return this.firstName + ' ' + this.lastName;
    }
}