export var logger = function logger() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      message = _ref.message,
      cssCode = _ref.cssCode,
      _ref$method = _ref.method,
      method = _ref$method === void 0 ? 'log' : _ref$method;

  if (!cssCode) {
    console[method](message);
  } else {
    console[method]("%c".concat(message), cssCode);
  }
};