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
    show: true,
    width: "50px",
    borderRadius: "100%",
    border: "10px solid black",
    position: "absolute" as const,
    top: "50px",
    right: "-230px",
    height: "50px",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "120px",
    right: "-200px",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "80px",
    right: "-200px",
    rotate: "-45deg",
    transformOrigin: "right bottom",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "80px",
    right: "-200px",
    rotate: "45deg",
    transformOrigin: "left bottom",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "113px",
    right: "-192px",
    rotate: "-135deg",
    transformOrigin: "right bottom",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "113px",
    right: "-208px",
    rotate: "135deg",
    transformOrigin: "left bottom",
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

export function HangmanDrawing() {
  return (
    <div style={{ position: "relative" }}>
      {bodyPartsStyles.map(
        ({ show, ...partStyles }) => show && <div style={partStyles} />
      )}

      {hangerPartsStyles.map((partStyles) => (
        <div style={partStyles} />
      ))}
    </div>
  );
}
