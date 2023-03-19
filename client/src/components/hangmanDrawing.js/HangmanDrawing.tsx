const commonStyles = {
  stickStyles: {
    width: "10px",
    height: "100px",
    background: "black",
    position: "absolute" as const,
  },
};

const bodyPartsStyles = [
  {
    name: "head",
    styles: {
      width: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute" as const,
      top: "50px",
      right: "-230px",
      height: "50px",
    },
  },
  {
    name: "body",
    styles: {
      ...commonStyles.stickStyles,
      top: "120px",
      right: "-200px",
    },
  },
  {
    name: "leftArm",
    styles: {
      ...commonStyles.stickStyles,
      top: "80px",
      right: "-200px",
      rotate: "-45deg",
      transformOrigin: "right bottom",
    },
  },
  {
    name: "rightArm",
    styles: {
      ...commonStyles.stickStyles,
      top: "80px",
      right: "-200px",
      rotate: "45deg",
      transformOrigin: "left bottom",
    },
  },
  {
    name: "leftLeg",
    styles: {
      ...commonStyles.stickStyles,
      top: "113px",
      right: "-192px",
      rotate: "-135deg",
      transformOrigin: "right bottom",
    },
  },
  {
    name: "rightLeg",
    styles: {
      ...commonStyles.stickStyles,
      top: "113px",
      right: "-208px",
      rotate: "135deg",
      transformOrigin: "left bottom",
    },
  },
];

const hangerPartsStyles = [
  {
    ...commonStyles.stickStyles,
    height: "50px",
    top: "0",
    right: "-200px",
  },
  {
    ...commonStyles.stickStyles,
    height: "10px",
    width: "200px",
    right: "-200px",
    marginLeft: "120px",
  },
  {
    ...commonStyles.stickStyles,
    height: "400px",
    right: "0",
    marginLeft: "120px",
  },
  {
    ...commonStyles.stickStyles,
    height: "10px",
    top: "400px",
    right: "-125px",
    width: "250px",
  },
];

type props = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: props) {
  return (
    <div style={{ position: "relative" }}>
      {bodyPartsStyles.slice(0, numberOfGuesses).map(({ name, styles }) => (
        <div key={name} style={styles} />
      ))}

      {hangerPartsStyles.map((partStyles, index) => (
        <div style={partStyles} key={index} />
      ))}
    </div>
  );
}
