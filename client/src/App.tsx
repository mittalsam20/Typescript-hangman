import { useState, useEffect, useCallback } from "react";
import words from "./wordList.json";
import "./App.css";
import { HangmanDrawing } from "./components/hangmanDrawing.js/HangmanDrawing";
import { WordDrawing } from "./components/wordDrawing/WordDrawing";
import { Keyboard } from "./components/keyboard/Keyboard";

const getNewWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getNewWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );
  const isLooser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const verdict = `${
    isWinner ? "You Won -" : isLooser ? "You Loose -" : ""
  } Hit Enter to try again`;
  const activeLetters = guessedLetters.filter((letter) =>
    wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLooser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters, isLooser, isWinner]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getNewWord());
    };
    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, []);

  return (
    <div className={"mainContainer"}>
      <div className={"mainTitle"}>{"Hangman"}</div>

      <div className={"bodyContainer"}>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

        <div className={"rightContainer"}>
          <div>{verdict}</div>
          <WordDrawing
            isReveal={isLooser}
            wordToGuess={wordToGuess}
            guessedLetters={guessedLetters}
          />
          <Keyboard
            activeLetters={activeLetters}
            disabled={isWinner || isLooser}
            inActiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
