import { createElement } from './createElement.js';
import { updateProps } from './props.js';
import { diff } from './diff.js';
export function updateElement(parentNode, newVNode, oldVNode) {
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!oldVNode) {
    parentNode.appendChild(createElement(newVNode));
  } else if (!newVNode) {
    parentNode.removeChild(parentNode.childNodes[index]);
  } else if (diff(newVNode, oldVNode)) {
    parentNode.replaceChild(createElement(newVNode), parentNode.childNodes[index]);
  } else if (newVNode.type) {
    updateProps(parentNode.childNodes[index], newVNode.props, oldVNode.props);
    var i = 0;
    var newChildrenCount = newVNode.children.length;
    var oldChildrenCount = oldVNode.children.length;

    for (; i < newChildrenCount || i < oldChildrenCount; ++i) {
      updateElement(parentNode.childNodes[index], newVNode.children[i], oldVNode.children[i], i);
    }
  }
}