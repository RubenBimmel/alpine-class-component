abstract class AlpineComponent {
    /** Access a global store registered using Alpine.store(...) */
    $store!: any;

    /** Reference the current DOM element */
    $el!: HTMLElement;

    /** Dispatch a custom browser event from the current element */
    $dispatch!: (event: string, data?: any) => void;

    /** Watch a piece of data and run the provided callback anytime it changes */
    $watch!: (property: string, callback: (value: any) => void) => void;

    /** Reference an element by key (specified using x-ref) */
    $refs!: { [name: string]: HTMLElement };

    /** Wait until the next "tick" (browser paint) to run a bit of code */
    $nextTick!: (callback: (_: any) => void) => void;
}

interface AlpineComponent {
    init(): void;
}

export default AlpineComponent;