import { CustomizeMe, Listen } from '../../../lib';

@CustomizeMe({
    selector: 'flex-box',
    template: '<slot></slot>',
    style: `
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
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
    static row = 'row';
    static column = 'column';

    connectedCallback() {
        console.dir(this.attributes);
    }

    attributeChangedCallback(name: unknown) {
        if (name === FlexBox.column) {
            this.style.flexDirection = 'column';
        } else if (name === FlexBox.row) {
            this.style.flexDirection = 'row';
        }
    }

    static get observedAttributes() {
        console.log('A');

        return [FlexBox.column, FlexBox.row];
    }

    @Listen('install', 'action-button')
    onInstallButtonClick(event: Event) {
        console.log(event);
    }
}
