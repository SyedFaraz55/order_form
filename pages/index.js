import html2canvas from "html2canvas";
import Head from "next/head";
import Image from "next/image";
import NoSSR from "react-no-ssr";
import React, { createRef, useEffect, useRef, useState } from "react";
import { useScreenshot, createFileName } from "use-react-screenshot";
import axios from "axios";
import htmlToPdfmake from 'html-to-pdfmake';
import pdfMake from 'pdfmake';

import Form from "../Components/Form";
import jsPDF from "jspdf";
import AWS from "aws-sdk";
import S3 from "react-aws-s3";
import * as mime from "mime-types";
import { decode } from "base64-arraybuffer";
import { useReactToPrint } from "react-to-print";
import pdfFonts from 'pdfmake/build/vfs_fonts';
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

const Home = () => {
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

  const download = async (image2, { name = "testtt", extension = "pdf" } = {}) => {
    

    const type = "application/pdf";

    const userId = 1;

    const params = {
      Bucket: "natmarts",
      Key: `${userId}.${type}`, // type is not required
      Body: image2,
      ContentEncoding: "base64", // required
      ContentType: `application/pdf`, // required. Notice the back ticks
    };

    let location = "";
    let key = "";
    try {
      const { Location, Key } = await s3.upload(params).promise();
      if (Location) {
        axios
          .post("https://infopublishers.onrender.com/api/users/order", { link: Location })
          .then((res) => {
            if (res.data.ok) {
              // setForm(true);
              alert("Form Submitted");
            } else {
              alert("failed to submit");
            }
          })
          .catch((err) => alert(err.toString()));
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
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const downloadPage = () => {
    const input = document.getElementById("printpdf");
    html2canvas(input).then((canvas) => {

      var imgWidth = 210; 
      var pageHeight = 295;  
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      let position = 0

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, position,imgWidth,imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("tst.pdf")
      // download(pdf.output())

    });
  };
  return (
    <div style={{ padding: 10 }}>
      <header style={{ padding: 20 }}>
        <Image alt="image" src={Logo} />
      </header>
      <Head></Head>
      <div style={{ height: "100vh" }}>
        {/* <div>
          <button style={{ marginBottom: "10px" }} onClick={getImage}>
            Take screenshot
          </button>
        </div> */}

        {/* <img width={500} src={image} alt={"Screenshot"} /> */}
        <div
          className="App"
          style={{
            width: "210mm",
            minHeight:"200mm",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          id="printpdf"
          ref={componentRef}
        >
          <div ref={ref2}>
            <NoSSR>
              <Form />
            </NoSSR>
          </div>
        </div>
        <div style={{}}>
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
              // getImage();
              // downloadScreenshot();
              // handlePrint();
              downloadPage();
            }}
          >
            Submit Form
          </button>
        </div>
      </div>
    </div>
  );
};


export default Home