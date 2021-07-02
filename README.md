# Alpine Class Component

[![npm version](https://badge.fury.io/js/%40rubenbimmel%2Falpine-class-component.svg)](https://badge.fury.io/js/%40rubenbimmel%2Falpine-class-component)

This package provides typescript support for [Alpine.js](https://github.com/alpinejs/alpine), and is inspired by [archtechx/alpine-typescript](https://github.com/archtechx/alpine-typescript) and [kaorun343/vue-property-decorator](https://github.com/kaorun343/vue-property-decorator).

## Install
```
npm install @rubenbimmel/alpine-class-component
```

## Usage

- [Components](#Components)
- [Constructor](#Constructor)
- [Init](#Init)
- [Getters](#Getters)
- [Refs](#Refs)
- [Watch](#Watch)


## <a id="Components"></a> Components
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

## <a id="Constructor"></a> Constructor
You can pass in additional parameters to the initial data object using a constructor:

```ts
import { AlpineComponent, Component } from '@rubenbimmel/alpine-class-component';

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
```

```html
<div x-data="person('John', 'Doe')">
    <span x-text="name"></span>
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

## <a id="Refs"></a> Refs
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

## <a id="Watch"></a> Watch
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

