import { AppHeadline } from './Headline.js';
import { AppDescription } from './Description.js';
var _window = window,
    React = _window.React;
export function AppContents(props) {
  return React.createElement("div", {
    className: "contents",
    lang: props.lang
  }, React.createElement(AppHeadline, null), React.createElement(AppDescription, null));
}