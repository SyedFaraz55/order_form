import React from "react";

const Information = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #000",
      }}
    >
      <div style={{ borderRight: "1px solid #000", flex: 1, padding: 5 }}>
        <p style={{ fontSize: 16, fontStyle: "italic" }}>
          Ordered By:
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
              width: "70%",
            }}
          />
        </p>
        <p style={{ fontSize: 16, fontStyle: "italic" }}>
          Address:
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
              width: "80%",
            }}
          />
        </p>

        <p style={{ fontSize: 16, fontStyle: "italic" }}>
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
            }}
          />
          Cell:
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
            }}
          />
        </p>
      </div>

      <div style={{ borderRight: "1px solid #000", flex: 1, padding: 5 }}>
        <p style={{ fontSize: 16, fontStyle: "italic" }}>
          Supply to:
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
              width: "70%",
            }}
          />
        </p>
        <p style={{ fontSize: 16, fontStyle: "italic" }}>
          Address:
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
              width: "80%",
            }}
          />
        </p>

        <p style={{ fontSize: 16, fontStyle: "italic" }}>
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
            }}
          />
          Cell:
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontSize: 16,
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default Information;
