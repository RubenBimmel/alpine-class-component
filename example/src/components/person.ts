import { AlpineComponent, Component } from '../../../src';

@Component
export default class Person extends AlpineComponent {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
    }

    get name() {
        return this.firstName + ' ' + this.lastName;
    }
}