import { extractEventType, isEventProp } from './props.js';
export function bindEvents(node, props) {
  Object.keys(props).forEach(function (prop) {
    if (isEventProp(prop)) {
      node.addEventListener(extractEventType(prop), props[prop]);
    }
  });
}