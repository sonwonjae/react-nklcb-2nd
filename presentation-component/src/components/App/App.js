import React from 'react';
import reactLogoPath from '../../assets/react.svg';
import emojiPath from '../../assets/emoji/oops.png';

console.log(reactLogoPath);

export default function App({ greetingMessage }) {
  return (
    <div className="app">
      <img src={reactLogoPath} alt="React" />
      <img src={emojiPath} alt="Oops" />
      <h1>{greetingMessage}</h1>
    </div>
  );
}
