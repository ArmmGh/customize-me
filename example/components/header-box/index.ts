import { CustomizeMe, Prop } from '../../../lib';

@CustomizeMe({
    selector: 'header-box',
    template: `
        <h1>{{headTitle}}</h1>
        <p>{{message}}</p>
   `,
    style: ` 
    `,
    useShadow: true
})
export class HeaderBox extends HTMLElement {
    constructor() {
        super();
        setTimeout(() => {
            this.message = 'Test';
        }, 1500);
    }

    @Prop()
    message!: string;
}
