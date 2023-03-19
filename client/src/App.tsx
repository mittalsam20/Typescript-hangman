import { useState, useEffect } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./components/hangmanDrawing.js/HangmanDrawing";
import { WordDrawing } from "./components/wordDrawing/WordDrawing";
import { Keyboard } from "./components/keyboard/Keyboard";

const randomWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(randomWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className={"mainContainer"}>
      <div className={"mainTitle"}>{"The Hangman"}</div>
      <div className={"bodyContainer"}>
        <div style={{ display: "flex", width: "350px" }}>
          <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        </div>
        {/* <div>{"Lose Win"}</div> */}
        <div className={"rightContainer"}>
          <WordDrawing
            wordToGuess={wordToGuess}
            guessedLetters={guessedLetters}
          />
          <Keyboard />
        </div>
      </div>
    </div>
  );
};

export default App;
