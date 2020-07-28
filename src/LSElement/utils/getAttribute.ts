import { LSCustomElement } from "../types";
import { standardizePropertyName } from "../properties/standardizePropertyName";

export function getAttribute(self: LSCustomElement, key: string) {
	const formattedKey = standardizePropertyName(key);
	const newValue = self.getAttribute(formattedKey);
	return getAttributeValue(newValue);
}

export function getAttributeValue(value) {
    switch (true) {
        case value === '' || value === 'true': {
            return true;
        }
        case value === null: {
            return false;
        }
        case typeof value === 'object': {
            return JSON.parse(value);
        }
        default: {
            return value;
        }
    }
}