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
    right: "-350px",
    height: "50px",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "120px",
    right: "-320px",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "80px",
    right: "-320px",
    rotate: "-45deg",
    transformOrigin: "right bottom",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "80px",
    right: "-320px",
    rotate: "45deg",
    transformOrigin: "left bottom",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "113px",
    right: "-312px",
    rotate: "-135deg",
    transformOrigin: "right bottom",
  },
  {
    ...commonStyles.stickStyles,
    show: true,
    top: "113px",
    right: "-328px",
    rotate: "135deg",
    transformOrigin: "left bottom",
  },
];

const hangerPartsStyles = [
  {
    ...commonStyles.stickStyles,
    height: "50px",
    top: "0",
    right: "-320px",
  },
  {
    ...commonStyles.stickStyles,
    height: "10px",
    width: "200px",
    marginLeft: "120px",
  },
  {
    ...commonStyles.stickStyles,
    height: "400px",
    marginLeft: "120px",
  },
  {
    ...commonStyles.stickStyles,
    height: "10px",
    top: "400px",
    width: "250px",
  },
];

export function Keyboard() {
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
