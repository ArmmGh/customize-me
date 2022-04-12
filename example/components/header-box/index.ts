import { CustomizeMe, Listen } from '../../../lib';

@CustomizeMe({
    selector: 'header-box',
    template: `
        <h1>{{title}}</h1>
        <p>{{message}}</p>
   `,
    style: ` 
    `,
    useShadow: true
})
export class ActionButton extends HTMLElement {
    constructor() {
        super();
    }

    @Listen('click')
    onButtonClick() {
        window.open('https://github.com/ArmmGh/customize-me', '_blank');
    }
}
