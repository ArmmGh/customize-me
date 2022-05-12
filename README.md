# customize-me

Create native custom elements using Typescript without using any third party libraries.

```
npm install customize-me
```
or
```
yarn install customize-me
```

## Usage

```ts
import { CustomizeMe } from 'customize-me';

@CustomizeMe({
  selector: 'action-button',
  template: '<button>Click me!!</button>',
  style: ` :host { color: #333 }`
})
export class ActionButton extends HTMLElement {
  // full source code is at example/action-button
  constructor() {
      super();
  }  
  @Listen('click')
  onButtonClick() {
    // Do some actions
  }
}
```
Add your file wth custom element into HTML file or Import in your Main JS file
```html
<!--index.html-->
<script src="action-button.js"></script>
```
OR
```javascript
// main.js
import './action-button';
```
Define element in HTML
```html
<!--index.html-->
<action-button></action-button>
```

## Decorators

| Decorator   | Target   | Parameters         | Description                                                                                                                                                                       |
|-------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| @Prop()     | property | -                  | custom property, triggering @Watch, reflects primitive properties to Reactive                                                                                                          |
| @Dispatch() | property | (event, eventTarget?)           | used to declare a CustomEvent which you could dispatch using the `.emit` method of its type `EventEmitter`. The `event` parameter is used to set the name of the `CustomEvent`. `eventTarget` is used to set manually element where need to emit the event |
| @Watch()    | method   | (property)         | triggers the method when a `property` is changed. (property should be defined with @Prop decorator)                                                                                                                                  |
| @Listen()   | method   | (eventName, selector?) | listens to an `event` or `custom event` on the `host` element or on the `selector` if specified                                                                                                     |

### @Prop() and @Watch()
Since `message` was defined with @Prop() its value change event can be watched using @Watch() decorator
```ts
import { CustomizeMe, Prop, Watch } from 'customize-me';

@CustomizeMe({
  selector: 'header-box',
  ...
})
export class HeaderBox extends HTMLElement {
  @Watch('message')
  onMessageChange(value: string) {
    console.log('Message changed ->', value);
  }

  @Prop()
  public message = 'Hola';
}
```

### @Dispatch()

**Creating a custom event**

```ts
import { CustomizeMe, Dispatch, Listen } from 'customize-me';
import { EventEmitter } from 'customize-me/global/types';
...
export class ActionButton extends HTMLElement {
  // Creating a CustomEvent named  `onInstall`
  @Dispatch('onInstall', document.getElementById('info-box'))
  installEvent: EventEmitter;
  
  // Creating a CustomEvent with name `onHover`, property name by default 
  @Dispatch() onHover: EventEmitter;
}
```
**Triggering the custom event** from the example above:

```ts
  triggerOnChange() {
    // adding more data to the event object
    this.installEvent.emit({ detail: 'install event triggered' });
    this.onHover.emit({ detail: 'hover!!' });
  }
```
### @Listen()

Listen has parameters `eventName` and `selector`. `EventName` is any valid javascript event or can be custom event name. `Selector` is optional, by defining it method would be triggered only for setted **Child** `Selector`. It works as [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

```ts
import { CustomizeMe, Listen } from 'customize-me';
...
export class ActionButton extends HTMLElement {
  @Listen('click')
  buttonClicked(e: Event | CustomEvent) {
    // triggers when the element is clicked
  }

  @Listen('anotherEvent',)
  anotherEventTriggered(e: Event | CustomEvent) {
    // triggers when an `anotherEvent` dispatched from another custom element like
	//... @Dispatch('anotherEvent', document.getElementById('actionButton'))
  }
}
```

**Thanks for reading to the end :)**
