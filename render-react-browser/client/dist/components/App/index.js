import { AppContents } from './Contents.js';
import { TranslationButton } from '../Button/TranslationButton.js';
var _window = window,
    React = _window.React;
export default function App() {
  return React.createElement("div", {
    className: "app"
  }, React.createElement(AppContents, null), React.createElement(TranslationButton, {
    size: 24 * 1,
    label: "\uC601 \u2192 \uD55C"
  }));
}