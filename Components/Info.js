import React from "react";
import Logo from "../images/logo.png";
import Image from "next/image";
const Info = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid #000",
      }}
    >
      <div
        style={{ borderRight: "1px solid #000", flex: 1, textAlign: "center" }}
      >
        <Image
          src={Logo}
          style={{ width: 250, height: "auto", marginTop: 20 }
        }
        alt="img"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <input
            style={{ width: 25, height: 25, fontSize: 20, textAlign: "center" }}
          />
        </div>
      </div>
      <div
        style={{ borderRight: "1px solid #000", flex: 1, textAlign: "center" }}
      >
        <Image
          src={Logo}
          style={{ width: 250, height: "auto", marginTop: 20 }}
          alt="img"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <input
            style={{ width: 25, height: 25, fontSize: 20, textAlign: "center" }}
          />
        </div>
      </div>
      <div style={{ border: "0px solid #000", flex: 1, padding: "5px" }}>
        <p
          style={{
            padding: 0,
            margin: 0,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          Order Date:{" "}
          <input
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontWeight: "bold",
            }}
            type="date"
          />
        </p>
        <p style={{ fontStyle: "italic", fontWeight: "bold" }}>
          Delivery Date{" "}
          <input
            type="date"
            style={{
              border: 0,
              outline: "none",
              borderBottom: "1px dotted #000",
              marginLeft: 10,
              fontWeight: "bold",
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default Info;
