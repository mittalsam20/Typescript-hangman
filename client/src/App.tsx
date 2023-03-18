import { useState } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./components/hangmanDrawing.js/HangmanDrawing";
import { WordDrawing } from "./components/wordDrawing/WordDrawing";
import { Keyboard } from "./components/keyboard/Keyboard";

const randomWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(randomWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div className={"mainContainer"}>
      <div className={"mainTitle"}>{"The Hangman"}</div>
      <div className={"bodyContainer"}>
        <div style={{ display: "flex", width: "350px" }}>
          <HangmanDrawing />
        </div>
        {/* <div>{"Lose Win"}</div> */}
        <div className={"rightContainer"}>
          <WordDrawing />
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default App;
