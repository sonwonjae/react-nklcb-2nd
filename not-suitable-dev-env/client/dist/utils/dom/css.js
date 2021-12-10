import { isElementNode, throwError } from '../../utils/index.js';

function setStyle(node, styleName, value) {
  if (isElementNode(node)) {
    node.style[styleName] = value;
  } else {
    throwError('...');
  }
}

function getStyle(node, styleName) {
  var pseudoElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (isElementNode(node)) {
    return window.getComputedStyle(node, pseudoElement)[styleName];
  } else {
    throwError('...');
  }
}

export function css(node, styleName, value) {
  var pseudoElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return !value ? getStyle(node, styleName, pseudoElement) : setStyle(node, styleName, value);
}