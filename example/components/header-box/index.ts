import { CustomizeMe, Prop, Watch } from '../../../src';

@CustomizeMe({
    selector: 'header-box',
    template: `
        <h1>Customize me</h1>
   `,
   style: `
        h1 {
            margin: 40px;
            color: rgb(40, 44, 52);
            font-weight: 500;
            letter-spacing: .2rem;
            font-size: 45px;
            text-shadow: 0px -2px 2px #282c3496;
            text-align: center;
        }
   `,
    useShadow: true
})
export class HeaderBox extends HTMLElement {
    constructor() {
        super();
    }

    @Watch('message')
    onMessageChange(value: string) {
        console.log('Message changed ->', value);
    }

    @Prop()
    public message = 'Hola';
}
