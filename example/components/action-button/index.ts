import { CustomizeMe, Listen } from '../../../lib';

@CustomizeMe({
    selector: 'action-button',
    template: '<button>npm install</button>',
    style: `
    :host {
        margin-top: 25px;
    }
    button,
    button:after {
        font-family: 'Montserrat Alternates', sans-serif;
        cursor: pointer;
        width: 250px;
        height: 45px;
        line-height: 45px;
        font-size: 20px;
        background: linear-gradient(45deg, transparent 5%, #5d6270 5%);
        border: 0;
        color: #e2696c;
        letter-spacing: 3px;
        box-shadow: 6px 0px 0px #fd6b6b;
        text-shadow: 0px 5px 4px #282c34;
        outline: transparent;
        position: relative;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        }
        button:after {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        
        content: 'CUSTOMIZE ME';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: #fff;
        background: linear-gradient(45deg, transparent 3%, #fd6b6b 3%, #fd6b6b 5%, #5d6270 5%);
        text-shadow: -3px -3px 0px #5d6270, 3px 3px 0px #fd6b6b;
        clip-path: var(--slice-0);
        }

        button:hover:after {
        animation: 2s glitch infinite;
        animation-timing-function: steps(2, end);
        }

        @keyframes glitch {
        0% {
            clip-path: var(--slice-1);
            transform: translate(-20px, -10px);
        }
        10% {
            clip-path: var(--slice-3);
            transform: translate(10px, 10px);
        }
        20% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 10px);
        }
        30% {
            clip-path: var(--slice-3);
            transform: translate(0px, 5px);
        }
        40% {
            clip-path: var(--slice-2);
            transform: translate(-5px, 0px);
        }
        50% {
            clip-path: var(--slice-3);
            transform: translate(5px, 0px);
        }
        60% {
            clip-path: var(--slice-4);
            transform: translate(5px, 10px);
        }
        70% {
            clip-path: var(--slice-2);
            transform: translate(-10px, 10px);
        }
        80% {
            clip-path: var(--slice-5);
            transform: translate(20px, -10px);
        }
        90% {
            clip-path: var(--slice-1);
            transform: translate(-10px, 0px);
        }
        100% {
            clip-path: var(--slice-1);
            transform: translate(0);
        }
        }
    }
	`,
    useShadow: true
})
export class ActionButton extends HTMLElement {
    constructor() {
        super();
    }

    @Listen('click', 'button')
    onButtonClick() {
        window.open('https://github.com/ArmmGh/customize-me', '_blank');
    }
}
