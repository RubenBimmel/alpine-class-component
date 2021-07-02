import { AlpineComponent, Component } from '../../../dist';

@Component
export default class Dropdown extends AlpineComponent {
    show = false;

    open() {
        this.show = true
    }

    close() {
        this.show = false
    }
}