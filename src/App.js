import "./styles.css";
import { useState } from "react";
export default function App() {
  const emojiDictionary = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "Sad",
    "😂": "Face with tears of joy",
    "❤️": "Love",
    "😒": "Unamused face",
    "😑": "Annoyance",
    "🤝": "Handshake",
    "👋": "Waving Hand",
    "✋": "Raised Hand",
    "✌️": "Victory Hand",
    "✍️": "Writing Hands",
    "👍": "Thumbs Up",
    "👎": "Thumbs Down",
    "✊": "Raised Fist",
    "👏": "Clapping Hands",
    "👐": "Open Hands",
    "🙌": "Raising Hands"
  };
  var emojiObj = Object.keys(emojiDictionary);
  var [meaning, setMeaning] = useState("");
  function eventHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (userInput === "") {
      meaning = "";
    }
    if (meaning === undefined) {
      meaning = "Not present in database";
    }
    setMeaning(meaning);
  }

  function displayMeaning(event) {
    meaning = emojiDictionary[event];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside out!!!</h1>
      <input onChange={eventHandler}></input>
      <div>Meaning: {meaning}</div>
      <h3>Database</h3>
      {emojiObj.map((item) => {
        return (
          <span
            key={item}
            onClick={() => displayMeaning(item)}
            style={{ fontSize: "2rem", padding: "1.1rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
