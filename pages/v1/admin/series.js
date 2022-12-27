import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "../../../Components/Header";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
const Series = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const getRecords = async () => {
    const r = await axios.get("http://localhost:8000/series");
    if (r.data.ok) {
      setData(r.data.data);
      console.log(r.data.data);
    } else {
      alert("Something went wrong");
    }
  };

  const handleDelete = (item) => {
    axios
      .post(`http://localhost:8000/delete-record/`, { id: item._id })
      .then((res) => {
        if (res.data.ok) {
          alert("Record Deleted");
          getRecords();
        } else {
          alert("Failed to delet record");
        }
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  useEffect(() => {
    getRecords();
  }, []);
  return (
    <div>
      <header
        style={{
          backgroundColor: "#2D3748",
          padding: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ color: "#fff" }}>Order Form Admin</h2>
        <div>
          <Link href={"/v1/admin/"} legacyBehavior>
            <a style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          </Link>
          <Link href={"/v1/admin/category"} legacyBehavior>
            <a
              style={{ color: "#fff", textDecoration: "none", marginLeft: 20 }}
            >
              Records
            </a>
          </Link>
          <Link href={"/v1/admin/series"} legacyBehavior>
            <a
              style={{ color: "#fff", textDecoration: "none", marginLeft: 20 }}
            >
              Smart Series
            </a>
          </Link>
        </div>
      </header>
      <div style={{ padding: 15 }}>
        <h2>All Records</h2>
        <div style={{ marginTop: 20 }}>
          <Accordion allowZeroExpanded={true}>
            {/* {data?.map((item,index) => {
              return (
                <AccordionItem key={index}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {item?.rows?.map((item,index) => {
                      if (item.title) {
                        return (
                          <div key={index}>
                            <div
                              style={{
                                background: "#e6e6e6",
                                width: 600,
                                padding: 5,
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"space-between",
                                alignItems:'center'
                              }}
                            >
                              <h3>{item.title}</h3>
                            <button className="bn60-link" style={{marginTop:10,marginBottom:10}} onClick={()=> {
                                handle()
                            }}>Delete Section</button>
                            </div>
                            {item?.rows?.map((item,index) => {
                              return (
                                <>
                                  <div
                                  key={index}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      width: 600,
                                      justifyContent: "space-between",
                                      border: "1px solid #f6f6f6",
                                      padding: 10,
                                    }}
                                  >
                                    <p>{item?.name}</p>
                                    <p>{item?.price}</p>
                                  </div>
                                </>
                              );
                            })}
                          </div>
                        );
                      }
                      return (
                        <div
                        key={index}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: 400,
                            justifyContent: "space-between",
                            border: "1px solid #f6f6f6",
                            padding: 10,
                          }}
                        >
                          <p>{item?.name}</p>
                          <p>{item?.price}</p>
                        </div>
                      );
                    })}
                    <button
                      className="bn60"
                      style={{ width: 100, marginTop: 10 }}
                      onClick={() => handleDelete(item)}
                    >
                      Delete Group
                    </button>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })} */}
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>{'Volume'}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {data?.volume?.map((item, index) => {
                  return <div

                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                      justifyContent: "space-between",
                      border: "1px solid #f6f6f6",
                      padding: 10,
                    }}
                  >
                    <p>{item?.name}</p>
                    <p>{item?.price}</p>
                    <button className="bn60" style={{}} onClick={() => {
                      const r = data?.volume?.filter(itm => itm._id != item._id)
                      setData(prevState => ({ ...prevState, volume: r }))
                      axios.post("http://localhost:8000/delete-volume", r)
                        .then(res => console.log(res))
                        .catch(err => alert(err.toString()))
                    }}>Delete</button>
                  </div>
                })}
              </AccordionItemPanel>

            </AccordionItem>

            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>{'Series'}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {data?.semester?.map((item, index) => {
                  return <div
                    onClick={() => {

                    }}
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: 400,
                      justifyContent: "space-between",
                      border: "1px solid #f6f6f6",
                      padding: 10,
                    }}
                  >
                    <p>{item?.name}</p>
                    <p>{item?.price}</p>
                    <button className="bn60" style={{}} onClick={() => {
                      const r = data?.semester?.filter(itm => itm._id != item._id)
                      setData(prevState => ({ ...prevState, semester: r }))
                      axios.post("http://localhost:8000/delete-semester", r)
                        .then(res => console.log(res))
                        .catch(err => alert(err.toString()))
                    }}>Delete</button>
                  </div>
                })}
              </AccordionItemPanel>

            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Series