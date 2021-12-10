import { Logo, IconButton } from './components/index.js';
var _window = window,
    React = _window.React,
    ReactDOM = _window.ReactDOM;
ReactDOM.render(React.createElement("div", {
  className: "more-shoes-shop"
}, React.createElement(Logo, null), React.createElement(IconButton, null), React.createElement(IconButton, {
  shape: "cart"
})), document.getElementById('root'));