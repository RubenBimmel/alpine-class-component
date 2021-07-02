import { AlpineComponent, Component, Ref } from '../../../src';

@Component
export default class RemoveRef extends AlpineComponent {
    @Ref() text: HTMLSpanElement;

    remove() {
        this.text.remove();
    }
}