import { CustomizeMe } from '../../../lib';

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

    attributeChangedCallback(attrName: string) {
        switch (attrName) {
            case FlexBox.column:
                this.style.flexDirection = 'column';
                break;
            case FlexBox.row:
                this.style.flexDirection = 'row';
                break;
            default:
                break;
        }
    }

    static get observedAttributes() {
        return [FlexBox.column, FlexBox.row];
    }
}
