export var getRandom = function getRandom() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return Math.random() * n;
};
export var getRandomMinMax = function getRandomMinMax() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return Math.floor(getRandom(max - min) + min);
};