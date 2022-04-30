import { ConstructorWithListeners, CustomElementMetadata, DecorateClass, ComponentDecorator } from './global/types';
import { selectorValidator, templateValidator } from './global/validators';

export const CustomizeMe: ComponentDecorator = ({ selector, template, useShadow, style }: CustomElementMetadata): DecorateClass => {
    return (target) => {
        const customElement = class extends (target as unknown as { new (): any }) {
            constructor() {
                super();
            }

            connectedCallback() {
                this.validateMetadata(selector, template);
                this.attachListeners();
                this.render();
                super.connectedCallback && super.connectedCallback();
            }

            private createTemplateWithStyles(template: string, style?: string): HTMLTemplateElement {
                const templateElement: HTMLTemplateElement = document.createElement('template');
                const styles = `<style>${style || ''}</style>`;

                templateElement.innerHTML = `${styles}${template}`;
                return templateElement;
            }

            private validateMetadata(selector: string, template: string): void {
                selectorValidator(selector);
                templateValidator(template);
            }

            private attachListeners(): void {
                const target = this as unknown as HTMLElement & ConstructorWithListeners;
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
            }

            private render() {
                const templateElement: HTMLTemplateElement = this.createTemplateWithStyles(template, style);
                const copyOfTemplate: DocumentFragment = document.importNode(templateElement.content, true);
                const context = useShadow ? this.attachShadow({ mode: 'open' }) : this;
                context.appendChild(copyOfTemplate);
            }
        };

        if (!customElements.get(selector)) {
            customElements.define(selector, customElement as unknown as CustomElementConstructor);
        }
    };
};
