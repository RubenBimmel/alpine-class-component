import { AlpineComponent, Component, Watch } from '../../../src';

@Component
export default class Dropdown extends AlpineComponent {
    show = false;

    open() {
        this.show = true
    }

    close() {
        this.show = false
    }

    @Watch('show')
    onShowChange(value: boolean) {
        console.log(`@Watch: show = ${value}`);
    }
}