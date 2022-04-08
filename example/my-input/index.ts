import { CustomizeMe, Listen } from '../../lib';

@CustomizeMe({
	selector: 'my-input',
	template: '<input id="input" />',
	style: `
		input {
			border: 2px solid red;
			// border: none;
		}`,
	useShadow: true
})
export class MyInput extends HTMLElement {
	constructor() {
		super();
	}

	@Listen('input')
	onInput(event: Event) {
		console.log('Fire');
	}
}
