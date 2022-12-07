import html2canvas from "html2canvas";
import Head from "next/head";
import Image from "next/image";
import NoSSR from "react-no-ssr";
import React, { createRef, useEffect, useState } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import axios from "axios";
import Form from "../Components/Form";
import jsPDF from "jspdf";
import AWS from "aws-sdk";
import S3 from "react-aws-s3";
import * as mime from "mime-types";
import { decode } from "base64-arraybuffer";

import Logo from "../images/logo.png";

const S3_BUCKET = "natmarts";
const REGION = "ap-south-1";

const config = {
  bucketName: "natmarts",
  region: "ap-south-1",
  accessKeyId: "AKIAUDUENKGM74M5NUET",
  secretAccessKey: "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",
};
AWS.config.update(config);

export default () => {
  const ReactS3Client = new S3(config);

  const s3 = new AWS.S3();
  const ref = createRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const getImage = () => takeScreenshot(ref.current);

  const ref2 = createRef(null);
  const [image2, takeScreenShot2] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = async (image2, { name = "img", extension = "jpg" } = {}) => {
    const base64Data = new Buffer.from(
      image2?.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const type = image2.split(";")[0].split("/")[1];

    const userId = 1;

    const params = {
      Bucket: "natmarts",
      Key: `${userId}.${type}`, // type is not required
      Body: base64Data,
      ContentEncoding: "base64", // required
      ContentType: `image/${type}`, // required. Notice the back ticks
    };

    let location = "";
    let key = "";
    try {
      const { Location, Key } = await s3.upload(params).promise();
      if(Location) {
        axios.post("http://localhost:8000/api/users/order",{link:Location})
        .then(res=> {
          if(res.data.ok) {
            setForm(true)
            alert("Form Submitted");
          } else {
            alert("failed to submit")
          }
        })
        .catch(err => alert(err.toString()))
      }
    } catch (error) {}

    console.log(location, key);

    const a = document.createElement("a");
    a.href = image2;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot2(ref2.current).then(download);

  const upload = async () => {};

  return (
    <div>
      <header style={{ padding: 20 }}>
        <Image src={Logo} />
      </header>
      <Head></Head>
      <div style={{ height: "100vh" }}>
        {/* <div>
          <button style={{ marginBottom: "10px" }} onClick={getImage}>
            Take screenshot
          </button>
        </div> */}

        {/* <img width={500} src={image} alt={"Screenshot"} /> */}
        <div className="App" ref={ref}>
          <div ref={ref2}>
            <NoSSR>
              <Form />
            </NoSSR>
          </div>
        </div>
        <div style={{ width: "80%", margin: "0 auto", alignItems: "center" }}>
          <button
            style={{
              background: "green",
              color: "#fff",
              border: "none",
              outline: "none",
              padding: 10,
              width: 300,
              height: 60,
              fontSize: 20,
              textAlign: "center",
              marginTop: 20,
              marginLeft: 600,
              marginBottom: 100,
              borderRadius: 10,
            }}
            onClick={() => {
              getImage();
              downloadScreenshot();
            }}
          >
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
};
