type props = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function WordDrawing({ wordToGuess, guessedLetters }: props) {
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
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
