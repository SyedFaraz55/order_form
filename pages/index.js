import html2canvas from "html2canvas";
import Head from "next/head";
import Image from "next/image";

import React, { createRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import Form from "../Components/Form";
import jsPDF from 'jspdf'
export default () => {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);
  const exportPDF = () => {
    const input = document.getElementById("App");
    html2canvas(input,{logging:true,letterRendering:1,useCORS:true}).then((canvas)=> {
      const imgWidth = 208;
      const imgHeight  = canvas.height * imgWidth / canvas.width;
      const imgData = canvas.toDataURL('img/png');

    })
  }
  return (
    <div>
      <Head></Head>
      <div style={{ height: "100vh" }}>
        <div>
          <button style={{ marginBottom: "10px" }} onClick={getImage}>
            Take screenshot
          </button>
        </div>
        <img width={500} src={image} alt={"Screenshot"} />
        <div className="App" ref={ref}>
          <Form />
        </div>
      </div>
    </div>
  );
};
