function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export function diff(newVNode, oldVNode) {
  return _typeof(newVNode) !== _typeof(oldVNode) || typeof newVNode === 'string' && newVNode !== oldVNode || newVNode.type !== oldVNode.type || newVNode.props.forceUpdate;
}