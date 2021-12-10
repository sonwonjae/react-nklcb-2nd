import { isElementNode, throwError } from '../../utils/index.js';
export function addClass(node) {
  if (isElementNode(node)) {
    var _node$classList;

    for (var _len = arguments.length, classNames = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      classNames[_key - 1] = arguments[_key];
    }

    (_node$classList = node.classList).add.apply(_node$classList, classNames);
  } else {
    throwError('...');
  }
}
export function removeClass(node) {
  if (isElementNode(node)) {
    for (var _len2 = arguments.length, classNames = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      classNames[_key2 - 1] = arguments[_key2];
    }

    if (classNames.length === 0) {
      node.removeAttribute('class');
    } else {
      var _node$classList2;

      (_node$classList2 = node.classList).remove.apply(_node$classList2, classNames);
    }
  } else {
    throwError('...');
  }
}
export function hasClass(node, className) {
  if (isElementNode(node)) {
    return node.classList.contains(className);
  } else {
    throwError('...');
  }
}
export function toggleClass(node, className) {
  if (isElementNode(node)) {
    hasClass(node, className) ? removeClass(node, className) : addClass(node, className);
  } else {
    throwError('...');
  }
}