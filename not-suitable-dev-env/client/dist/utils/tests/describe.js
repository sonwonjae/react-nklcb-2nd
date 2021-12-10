export function describe(testLabel, callback) {
  var collasped = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  console[collasped ? 'groupCollapsed' : 'group'](testLabel);
  callback();
  console.groupEnd();
}