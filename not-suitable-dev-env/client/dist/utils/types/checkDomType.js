import { isNothing, throwError } from '../../utils/index.js';
export function hasProp(target, propName) {
  return propName in target;
}
export function isElementNode(node) {
  if (!isNothing(node) && hasProp(node, 'nodeType')) {
    if (node.nodeType === document.ELEMENT_NODE) {
      return true;
    } else {
      return false;
    }
  } else {
    throwError("\uC804\uB2EC\uB41C ".concat(node, "\uB294 \uC874\uC7AC\uD558\uC9C0 \uC54A\uAC70\uB098, nodeType \uC18D\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
  }
}