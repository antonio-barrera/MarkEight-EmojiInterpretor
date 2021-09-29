import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat",
  "🦁": "Lion",
  "🐯": "Tiger",
  "🐮": "Cow",
  "🐷": "Pig"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("...");

  function onChangeEvent(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "I do not know that emoji";
    }
    setMeaning(meaning);
  }

  function onClickEvent(emoji) {
    var userInput = emojiDictionary[emoji];
    setMeaning(userInput);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={onChangeEvent}></input>
      <h2>{meaning}</h2>
      <h3>Known Emojis:</h3>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => onClickEvent(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
