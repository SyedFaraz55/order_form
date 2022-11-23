import React from "react";
import Header from "./Header";
import Info from "./Info";

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    border: "2px solid #000",
    height: "100vh",
  },
};

const Form = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Info />
    </div>
  );
};

export default Form;
