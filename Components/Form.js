import React from "react";
import Header from "./Header";
import Info from "./Info";
import Information from "./Information";
import Main from "./Main";

const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    border: "2px solid #000",
    
  },
};

const Form = () => {
  return (
    <div style={styles.container}>
      <Header />
      <Info />
      <Information />
      <Main />
   
    </div>
  );
};

export default Form;
