export var typeIs = function typeIs(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};
export var isUndefined = function isUndefined(data) {
  return typeIs(data) === 'undefined';
};
export var isNull = function isNull(data) {
  return typeIs(data) === 'null';
};
export var isNothing = function isNothing(data) {
  return isUndefined(data) || isNull(data);
};
export var isString = function isString(data) {
  return typeIs(data) === 'string';
};
export var isNumber = function isNumber(data) {
  return typeIs(data) === 'number';
};
export var isBoolean = function isBoolean(data) {
  return typeIs(data) === 'boolean';
};
export var isFunction = function isFunction(data) {
  return typeIs(data) === 'function';
};
export var isArray = function isArray(data) {
  return typeIs(data) === 'array';
};
export var isObject = function isObject(data) {
  return typeIs(data) === 'object';
};
export var isDate = function isDate(data) {
  return typeIs(data) === 'date';
};