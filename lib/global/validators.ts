import { CustomElementMetadata } from './types';

export const selectorValidator = (selector: CustomElementMetadata['selector']): boolean => {
	const splitted: string[] = selector.split('-');
	const isValidPosition: boolean = splitted.every((word) => word.length);
	if (splitted.length > 1 && isValidPosition) {
		return true;
	}
	throw new Error(`Invalid selector <${selector}>, should be kebab-case like 'my-element'`);
};

export const templateValidator = (template: CustomElementMetadata['selector']) => {
	if (template) {
		return true;
	}
	throw new Error('Template does not exists, please define in CustomizeMe function');
};
