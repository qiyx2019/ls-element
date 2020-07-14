import { LSCustomElement, StylesType, RootElement } from '../../types';

function updateAttributes(currentElement: Element, newElement: Element) {
	//Remove attributes that doesn´t exists now
	currentElement.getAttributeNames().forEach(attribute => {
		if (!newElement.getAttributeNames().includes(attribute)) {
			currentElement.removeAttribute(attribute);
		}
	});

	//Add and update new attributes
	newElement.getAttributeNames().forEach(attribute => {
		if (currentElement.getAttribute(attribute) !== newElement.getAttribute(attribute)) {
			currentElement.setAttribute(attribute, newElement.getAttribute(attribute));
		}
	});
}

function updateElement(currentElement: Element, newElement: Element, root: RootElement) {
	if (currentElement.tagName !== newElement.tagName) {
		root.replaceChild(newElement, currentElement);
	}

	if (currentElement && newElement) {
		if (currentElement.outerHTML === newElement.outerHTML) return true;
		updateAttributes(currentElement, newElement);
		if (currentElement.outerHTML === newElement.outerHTML) return true;
		if (newElement.children.length > 0) {
			for (let i = 0; i < newElement.children.length; i++) {
				updateElement(currentElement.children.item(i), newElement.children.item(i), root);
			}
		} else {
			currentElement.textContent = newElement.textContent;
		}
	}
}

export function updateChangesInDom(self: LSCustomElement) {
	const newTemplate = render(self);

	if (Array.isArray(newTemplate)) {
		for (let i = 0; i < getChildrens(self).length; i++) {
			updateElement(getChildrens(self).item(i), newTemplate[i], getRootNode(self));
		}
	}
}

export function executeFirstRender(self: LSCustomElement) {
	const renderResult = render(self);
	if (renderResult) {
		renderResult.forEach(element => {
			getRootNode(self).appendChild(element);
		});
	}
}

function render(self: LSCustomElement) {
	const renderResult = self.render();
	if (renderResult) {
		let result = !Array.isArray(renderResult) ? [renderResult] : renderResult;
		const unknownElement = document.createElement('unknown');
		unknownElement.style.display = 'none';
		result = result.map(x => !x ? unknownElement : x);
		return result;
	} else return undefined;
}

export function addStyles(rootElement: RootElement, styles?: StylesType) {
	if (styles && styles.length > 0) {
		const styleElement = document.createElement('style');
		styleElement.setAttribute('scoped', '');
		Promise.all(styles).then(styleArray => {
			styleElement.textContent = styleArray.map(x => typeof x === 'string' ? x : x.default).join(' ');
			rootElement.appendChild(styleElement);
		});
	}
}

export function getChildrens(self: LSCustomElement) {
	return self.shadowRoot ? self.shadowRoot.children : self.children;
}

export function getRootNode(self: LSCustomElement): RootElement {
	return self.shadowRoot ? self.shadowRoot : self;
}