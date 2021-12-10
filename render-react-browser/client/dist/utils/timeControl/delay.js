export function delay() {
  var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  return new Promise(function (resolve) {
    window.setTimeout(function () {
      return resolve();
    }, timeout);
  });
}