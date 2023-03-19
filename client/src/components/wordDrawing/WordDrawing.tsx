type props = {
  isReveal?: boolean;
  wordToGuess: string;
  guessedLetters: string[];
};

export function WordDrawing({
  wordToGuess,
  guessedLetters,
  isReveal = false,
}: props) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25rem",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || isReveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && isReveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
