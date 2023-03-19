import "./keyboard.css";
const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type props = {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
}: props) {
  const getButtonClasses = (isActive: boolean, isInActive: boolean) =>
    `button ${isActive ? "active" : isInActive ? "inactive" : ""}`;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {keys.map((key, index) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        const buttonClasses = getButtonClasses(isActive, isInActive);
        console.log(buttonClasses);
        return (
          <button
            key={key}
            className={buttonClasses}
            disabled={isActive || isInActive}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
