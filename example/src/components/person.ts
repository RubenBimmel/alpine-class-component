import { AlpineComponent, Component } from '../../../dist';

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