import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid #000",
        padding:5
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: "bold" }}>ORDER FORM</p>
        <input
          style={{
            width: 100,
            height: 20,
            marginLeft: 10,
            fontSize: 20,
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: "bold" }}>SPECIMEN COPY</p>
        <input
          style={{
            width: 100,
            height: 20,
            marginLeft: 10,
            fontSize: 20,
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: "bold" }}>CREDIT NOTE</p>
        <input
          style={{
            width: 100,
            height: 20,
            marginLeft: 10,
            fontSize: 20,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
