function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Translator = function () {
  function Translator(state, initalLanguageMode) {
    _classCallCheck(this, Translator);

    this._state = state;
    this._languageMode = initalLanguageMode;
  }

  _createClass(Translator, [{
    key: "currentMode",
    get: function get() {
      return this._languageMode;
    }
  }, {
    key: "isKorean",
    value: function isKorean() {
      return this.currentMode === 'ko';
    }
  }, {
    key: "isEnglish",
    value: function isEnglish() {
      return this.currentMode === 'en';
    }
  }, {
    key: "toggleLanguageMode",
    value: function toggleLanguageMode() {
      this._languageMode = this.isKorean() ? 'en' : 'ko';
      return this;
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return "".concat(this.isKorean() ? '한 → 영' : '영 → 한', " \uBC88\uC5ED");
    }
  }, {
    key: "getContents",
    value: function getContents(key) {
      var contents = this._state[this.currentMode];
      return key ? contents[key] : contents;
    }
  }]);

  return Translator;
}();

_defineProperty(Translator, "textFormatting", function (text) {
  return text.toString().replace(/\n\s+/g, '').trim();
});

export { Translator as default };