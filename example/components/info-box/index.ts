import { CustomizeMe, Listen } from '../../../src';

@CustomizeMe({
    selector: 'info-box',
    template: `
        <p>Create native custom elements using Typescript</p>
        <p>without any third party libraries</p>
        <slot></slot>
    `,
    style: `
        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 25px;
            background: #ccc;
            flex: 55;
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.15);
            text-align: center;
            margin-left: 15px;
        }
        p {
            color: rgb(40, 44, 52);
            font-weight: 600;
            font-size: 22px;
            margin: 0;
            margin-bottom: 15px;
        }
        @media screen and (max-width: 768px) {
            :host {
                margin: 0;
                margin-top: 10px;
            }
            p {
                font-size: 18px;
            }
        }
   `,
    useShadow: true
})
export class InfoBox extends HTMLElement {
    constructor() {
        super();
    }

    @Listen('onInstall')
    handleInstallEvent() {
        window.open('https://github.com/ArmmGh/customize-me', '_blank');
    }
}
