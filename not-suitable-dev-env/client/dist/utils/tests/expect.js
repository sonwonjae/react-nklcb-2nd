import { hasClass, throwError } from '../../utils/index.js';
export function expect(received) {
  return {
    toBe: function toBe(expected) {
      if (received !== expected) {
        throwError("\uC804\uB2EC \uAC12\uC778 ".concat(received, "\uB294 \uAE30\uB300 \uAC12\uC778 ").concat(expected, "\uC640 \uAC19\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
      }
    },
    toBeInTheDocument: function toBeInTheDocument() {
      if (!document.body.contains(received)) {
        throwError("\uC804\uB2EC \uAC12\uC778 ".concat(received, " \uB178\uB4DC\uB294 \uBB38\uC11C\uC5D0 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
      }
    },
    toBeTruthy: function toBeTruthy() {
      if (received !== true) {
        throwError("\uC804\uB2EC \uAC12\uC778 ".concat(received, "\uB294 true\uAC00 \uC544\uB2D9\uB2C8\uB2E4."));
      }
    },
    toHasClass: function toHasClass(expected) {
      if (!hasClass(received, expected)) {
        throwError("\uC804\uB2EC \uAC12\uC778 ".concat(received, " \uB178\uB4DC\uB294 ").concat(expected, " \uD074\uB798\uC2A4 \uC774\uB984\uC744 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."));
      }
    }
  };
}