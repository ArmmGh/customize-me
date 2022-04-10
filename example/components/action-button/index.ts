import { CustomizeMe } from '../../../lib';

@CustomizeMe({
    selector: 'action-button',
    template: '<button>npm install customize-me</button>',
    style: `
	`,
    useShadow: true
})
export class ActionButton extends HTMLElement {
    constructor() {
        super();
    }
}
