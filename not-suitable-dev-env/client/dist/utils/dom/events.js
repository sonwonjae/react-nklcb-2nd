function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { isElementNode, isString, isObject, throwError } from '../../utils/index.js';
export function on(node, eventType, eventListener) {
  var eventOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (isElementNode(node)) {
    if (isString(eventType)) {
      console.log('eventType is string');
      node.addEventListener(eventType, eventListener, eventOptions);
      return function off() {
        node.removeEventListener(eventType, eventListener, eventOptions);
      };
    }

    if (isObject(eventType)) {
      console.log('eventType is object');
      var memoEventTypeAndListeners = {};

      for (var key in eventType) {
        if (Object.hasOwnProperty.call(eventType, key)) {
          var type = key;
          var listener = eventType[key];
          memoEventTypeAndListeners[key] = listener;
          on(node, type, listener, eventOptions);
        }
      }

      return function (willRemoveEventType) {
        Object.entries(memoEventTypeAndListeners).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              type = _ref2[0],
              listener = _ref2[1];

          if (!willRemoveEventType) {
            console.log("remove event type: ".concat(type));
            node.removeEventListener(type, listener, eventOptions);
          }

          if (willRemoveEventType === type) {
            console.log("remove event type: ".concat(type));
            node.removeEventListener(willRemoveEventType, listener, eventOptions);
          }
        });
      };
    }
  } else {
    throwError('...');
  }
}
export function off(node, eventType, eventListener) {
  var eventOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (isElementNode(node)) {
    node.removeEventListener(eventType, eventListener, eventOptions);
  } else {
    throwError('...');
  }
}
export function once(node, eventType, eventListener) {
  on(node, eventType, eventListener, {
    once: true
  });
}