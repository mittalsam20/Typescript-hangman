import React, { useState } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

const mainContainerStyles = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  maxWidth: "800px",
  margin: "0 auto",
  gap: "2rem",
};

const verdictStyles = {
  fontSize: "2rem",
};

const randomWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [wordToGuess, setWordToGuess] = useState(randomWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  return (
    <div style={mainContainerStyles}>
      <div style={verdictStyles}>{"Lose Win"}</div>
      <div>
        <HangmanDrawing />
        {/* <HangmanWord />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard />
        </div> */}
      </div>
    </div>
  );
}

export default App;
