import { ConstructorWithListeners, CustomElementMetadata, DecorateFunction, ComponentDecorator, MetaClass } from './global/types';
import { selectorValidator, templateValidator } from './global/validators';

export const CustomizeMe: ComponentDecorator = ({ selector, template, useShadow, style }: CustomElementMetadata): DecorateFunction => {
    return <T extends CustomElementConstructor>(target: T): any => {
        const customElement = class extends (target as { new (): any }) implements MetaClass {
            __customized = false;

            constructor() {
                super();
            }

            connectedCallback() {
                this.validateMetadata(selector, template);
                this.__render();

                // CustomizeMe.markCustomized(target);
                console.log(this.__customized);

                const self = this as unknown as HTMLElement;
                this.attachListeners(self as unknown as any);
                super.connectedCallback && super.connectedCallback();
            }

            private __render() {
                const templateElement: HTMLTemplateElement = this.createTemplateWithStyles(template, style);
                const clone: DocumentFragment = document.importNode(templateElement.content, true);
                if (useShadow) {
                    this.attachShadow({ mode: 'open' }).appendChild(clone);
                } else {
                    this.appendChild(clone);
                }
            }

            private createTemplateWithStyles = (template: string, style?: string): HTMLTemplateElement => {
                const templateElement: HTMLTemplateElement = document.createElement('template');
                const styles = `<style>${style || ''}</style>`;

                templateElement.innerHTML = `${styles}${template}`;
                return templateElement;
            };

            private validateMetadata = (selector: string, template: string): void => {
                selectorValidator(selector);
                templateValidator(template);
            };

            private attachListeners = (target: HTMLElement & ConstructorWithListeners) => {
                if (target.constructor.getListeners) {
                    const listeners = target.constructor.getListeners() || [];
                    const root = target.shadowRoot || target;
                    for (const listener of listeners) {
                        const eventTarget = listener.selector ? root.querySelector(listener.selector) : root;

                        eventTarget?.addEventListener(listener.eventName, (event: Event) => {
                            listener.handler.call(target, event);
                        });
                    }
                }
            };
        };

        if (!customElements.get(selector)) {
            customElements.define(selector, customElement as unknown as CustomElementConstructor);
        }
        return customElement;
    };
};

// CustomizeMe.markCustomized = (target: CustomElementConstructor): void => { TODO add to static prop __customized decorator @Froze
//     Object.defineProperty(target, '__customized__', {
//         writable: false,
//         enumerable: false,
//         configurable: false,
//         value: true
//     });
// };
