import { AppHeadline } from './Headline.js';
import { AppDescription } from './Description.js';
var _window = window,
    React = _window.React;
export function AppContents() {
  return React.createElement("div", {
    className: "contents",
    lang: "en"
  }, React.createElement(AppHeadline, null), React.createElement(AppDescription, null));
}