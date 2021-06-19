declare module "alpinejs" {
    interface Alpine {
        data: (name: string, component: any) => void;
        start: () => void;
        evaluate: (el: HTMLElement, expression: string, extras?: any) => undefined;
    }
    
    let instance: Alpine;
    export default instance;
}
