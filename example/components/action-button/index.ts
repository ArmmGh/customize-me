import { CustomizeMe, Dispatch } from '../../../lib';
import { CustomEventMetadata } from '../../../lib/global/types';

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

    connectedCallback() {
        this.installEvent.emit();
    }

    @Dispatch('install')
    installEvent!: CustomEventMetadata;
}
