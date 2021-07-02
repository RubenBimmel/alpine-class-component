import { AlpineComponent, Component, Watch } from '../../../dist';

const message = "This field is required";

@Component
export default class Dropdown extends AlpineComponent {
    value = '';
    errorMessage = message;

    @Watch('value')
    OnValueChanged(value: string) {
        if (value.length == 0) {
            this.errorMessage = message;
        } else {
            this.errorMessage = '';
        }
    }
}