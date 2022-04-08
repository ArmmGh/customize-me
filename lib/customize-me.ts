import { ConstructorWithListeners, CustomElementMetadata, DecorateFunction, DecorateWrapper } from './global/types';
import { selectorValidator, templateValidator } from './global/validators';

export const CustomizeMe: DecorateWrapper = ({ selector, template, useShadow, style }: CustomElementMetadata): DecorateFunction => {
	CustomizeMe.validateMetadata(selector, template);

	return <T extends CustomElementConstructor>(target: T): void => {
		CustomizeMe.markCustomized(target);

		const templateElement: HTMLTemplateElement = CustomizeMe.createTemplateWithStyles(template, style);
		const connectedCallback: () => void = target.prototype.connectedCallback;

		target.prototype.connectedCallback = function () {
			const self = this as HTMLElement;
			const clone: DocumentFragment = document.importNode(templateElement.content, true);

			if (useShadow) {
				self.attachShadow({ mode: 'open' }).appendChild(clone);
			} else {
				self.appendChild(clone);
			}

			CustomizeMe.attachEventListeners(this);
			connectedCallback && connectedCallback.call(self);
		};

		if (!customElements.get(selector)) {
			customElements.define(selector, target);
		}
	};
};

CustomizeMe.createTemplateWithStyles = function (template: string, style?: string): HTMLTemplateElement {
	const templateElement: HTMLTemplateElement = document.createElement('template');
	const styles = `<style>${style}</style>`;

	templateElement.innerHTML = `${styles}${template}`;
	return templateElement;
};

CustomizeMe.validateMetadata = function (selector: string, template: string): void {
	selectorValidator(selector);
	templateValidator(template);
};

CustomizeMe.markCustomized = (target: CustomElementConstructor): void => {
	Object.defineProperty(target, '__customized__', {
		writable: false,
		enumerable: false,
		configurable: false,
		value: true
	});
};

CustomizeMe.attachEventListeners = (target: HTMLElement & ConstructorWithListeners): void => {
	const listeners = target.constructor?.listeners;
	const root = target.shadowRoot || target;
	if (listeners) {
		for (const listener of listeners) {
			const eventTarget = listener.selector ? root.querySelector(listener.selector) : root;

			eventTarget?.addEventListener(listener.eventName, (event: Event) => {
				listener.handler.call(target, event);
			});
		}
	}
};
