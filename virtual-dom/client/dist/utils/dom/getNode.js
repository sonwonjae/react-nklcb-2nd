import { makeArray } from '../../utils/index.js';
export function getNodeList(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return makeArray(context.querySelectorAll(selector));
}
export function getNode(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return getNodeList(selector, context)[0];
}
export var $$ = getNodeList;
export var $ = getNode;