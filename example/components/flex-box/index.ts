import { CustomizeMe, Listen } from '../../../lib';

@CustomizeMe({
    selector: 'flex-box',
    template: '<slot></slot>',
    style: `
        :host {
            border: 2px solid green;
            display: flex;
        }
        :host.info {
        }
    `,
    useShadow: true
})
export class FlexBox extends HTMLElement {
    constructor() {
        super();
    }

    @Listen('install', 'action-button')
    onInstallButtonClick(event: Event) {
        console.log(event);
    }
}
