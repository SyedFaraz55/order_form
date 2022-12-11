import React from "react";

const Header = () => {
  const count = 1;
  const orderNumber = `${new Date().getDate()}${new Date().getFullYear()}${count}`;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "2px solid #000",
        padding: 5,
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ fontWeight: "bold" }}>ORDER FORM</p>
        <input
          style={{
            width: 200,
            marginLeft: 10,
            fontSize: 15,
          }}
          value={orderNumber}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          style={{
            height: 20,
            fontSize: 40,
            width: 20,
            height: 20,
          }}
          type="checkbox"
        />
        <p style={{ fontWeight: "bold", marginLeft: 10 }}>SPECIMEN COPY</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          style={{
            height: 20,
            fontSize: 40,
            width: 20,
            height: 20,
          }}
          type="checkbox"
        />
        <p style={{ fontWeight: "bold", marginLeft: 5 }}>CREDIT NOTE</p>
      </div>
    </div>
  );
};

export default Header;
