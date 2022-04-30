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
            this.message = 'Test1';
            this.message = 'Test2';
            this.message = 'Test3';
            // this.message;
        }, 1500);
    }

    connectedCallback() {
        // console.dir(this.message);
    }

    @Prop()
    message!: string;
}
