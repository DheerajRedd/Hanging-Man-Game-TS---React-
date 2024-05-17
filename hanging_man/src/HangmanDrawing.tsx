const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          height: "50px",
          background: "black",
          width: "10px",
          top: "0",
          right: "0",
          position: "absolute",
        }}
      />

      <div
        style={{
          height: "10px",
          background: "black",
          width: "200px",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          background: "black",
          width: "10px",
          marginLeft: "120px",
        }}
      />

      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
};

export default HangmanDrawing;
