import Head from "next/head";
import Image from "next/image";

import React, { createRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
import Form from "../Components/Form";
export default () => {
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);
  return (
    <div style={{height:"100vh"}}>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={getImage}>
          Take screenshot
        </button>
      </div>
      <img width={500} src={image} alt={'Screenshot'} />
      <div ref={ref}>
        <Form />
      </div>
    </div>
  );
};
