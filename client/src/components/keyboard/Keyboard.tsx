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
  disabled?: boolean;
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const getButtonClasses = (isActive: boolean, isInActive: boolean) =>
  `button ${isActive ? "active" : isInActive ? "inactive" : ""}`;

export function Keyboard({
  disabled = false,
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
}: props) {
  return (
    <div className={"keyboardContainer"}>
      {keys.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        const buttonClasses = getButtonClasses(isActive, isInActive);
        return (
          <button
            key={key}
            className={buttonClasses}
            disabled={isActive || isInActive || disabled}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
