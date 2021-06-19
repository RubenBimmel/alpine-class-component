# Alpine Class Component
This package provides typescript support for [Alpine.js](https://github.com/alpinejs/alpine), and is inspired by [archtechx/alpine-typescript](https://github.com/archtechx/alpine-typescript) and [kaorun343/vue-property-decorator](https://github.com/kaorun343/vue-property-decorator).

## Install
```
npm install @rubenbimmel/alpine-class-component
```

## Usage

- [`@Component`](#Component)
- [`Init`](#Init)
- [`Getters`](#Getters)
- [`@Ref`](#Ref)
- [`@Watch`](#Watch)
- [`@Prop`](#Prop)


## <a id="Component"></a> @Component
Write a component:

```ts
import { AlpineComponent, Component } from '@rubenbimmel/alpine-class-component';

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
```

Register a component:

```ts
import { Alpine } from '@rubenbimmel/alpine-class-component';

import Dropdown from './components/dropdown/dropdown';

Alpine.data('dropdown', Dropdown);

Alpine.start();

```

Use it in a template:
```html
<div x-data="dropdown">
    <button @click="open()">Expand</button>
 
    <span x-show="show" x-on:click.away="close()" x-cloak>
      Content...
    </span>
</div>
```


## <a id="Init"></a> Init
Init functions are automatically execute before the component is rendered:

```ts
import { AlpineComponent, Component } from '@rubenbimmel/alpine-class-component';

@Component
export default class Example extends AlpineComponent {
  init() {
    console.log('init');
  }
}
```

## <a id="Getters"></a> Getters
Getters can be used as normal:

```ts
import { AlpineComponent, Component } from '@rubenbimmel/alpine-class-component';

@Component
export default class Person extends AlpineComponent {
  firstName = 'John';
  lastName = 'Doe';

  get name() {
    return this.firstName + ' ' + this.lastName;
  }
}
```

## <a id="Ref"></a> @Ref
Use the Ref decorator to declare refs:

```html
<div x-data="example">
  <button @click="remove()">Remove Text</button>

  <span x-ref="text">Hello 👋</span>
</div>
```

```ts
import { AlpineComponent, Component, Ref } from '@rubenbimmel/alpine-class-component';

@Component
export default class Example extends AlpineComponent {
  @Ref() text: HTMLSpanElement;
  
  remove() {
    this.text.remove();
  }
}
```

## <a id="Watch"></a> @Watch
Use the Watch decorator to register watchers:

```ts
import { AlpineComponent, Component, Watch } from '@rubenbimmel/alpine-class-component';

@Component
export default class Dropdown extends AlpineComponent {
    show = false;
    
    @Watch('show')
    onShowChange(value: boolean) {
      console.log(value);
    }
}
```

## <a id="Prop"></a> @Prop
In a setup with re-usable data it can be usefull to pass props to a component. Alpine has no way to do this at the moment. The Prop decorator offers a workaround using the data attributes:

```html
<div x-data="Person" data-first-name="John" data-last-name="Doe">
    <span x-text="name"></span>
</div>
```

```ts
import { AlpineComponent, Component } from '@rubenbimmel/alpine-class-component';

@Component
export default class Person extends AlpineComponent {
  @Prop() firstName: string;
  @Prop() lastName: string;
  @Prop({ default: true }) useLastName: boolean;

  get name() {
    if (!this.useLastName) {
      return this.firstName;
    }
    
    return this.firstName + ' ' + this.lastName;
  }
}
```

