import "./wordDrawing.css";

type props = {
  isReveal?: boolean;
  wordToGuess: string;
  guessedLetters: string[];
};

const getLetterContainerStyle = (
  letter: string,
  isReveal: boolean,
  guessedLetters: string[]
) => {
  return {
    visibility: ((guessedLetters.includes(letter) || isReveal) &&
      "visible") as "visible",
    color: !guessedLetters.includes(letter) && isReveal ? "red" : "black",
  };
};

export function WordDrawing({
  wordToGuess,
  guessedLetters,
  isReveal = false,
}: props) {
  return (
    <div className={"wordContainer"}>
      {wordToGuess.split("").map((letter, index) => {
        const letterContainerStyle = getLetterContainerStyle(
          letter,
          isReveal,
          guessedLetters
        );
        return (
          <span key={index} className={"letterContainer"}>
            <span
              style={letterContainerStyle}
              className={"letterInnerContainer"}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}
