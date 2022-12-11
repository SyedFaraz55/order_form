import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, extras } from "../data";

const Main = () => {
  const [form, setForm] = useState({});
  const [records, setRecords] = useState([]);
  const [packages, setPackages] = useState([]);

  const getRecords = () => {
    axios
      .get("http://13.127.64.247:8000/records")
      .then((res) => {
        if (res.data.ok) {
          setRecords(res.data.data);
          console.log(res.data.data);
          console.log(data);
        } else {
          alert("Failed to load the page, please try again");
          return;
        }
      })
      .catch((err) => alert(err.toString()));
  };
  const getPackages = () => {
    axios
      .get("http://13.127.64.247:8000/getPackages")
      .then((res) => {
        if (res.data.ok) {
          setPackages(res.data.data);
          console.log(res.data.data);
        } else {
          alert("Failed to load the page, please try again");
          return;
        }
      })
      .catch((err) => alert(err.toString()));
  };
  useEffect(() => {
    getRecords();
    getPackages();
  }, []);
  return (
    <>
      <div className="grid" style={{ padding: 5 }}>
        {records?.map((item,index) => {
          console.log(item, "item");
          return (
            <div key={index} style={{ border: "1px solid #000", padding: 0 }}>
              <div
                style={{
                  backgroundColor: item?.subtitle ? "#000" : "#e6e6e6",
                }}
              >
                <h4
                  style={{
                    color: item.subtitle ? "#fff" : "#000",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </h4>
              </div>
              <table
                border={"1px solid #000"}
                style={{ borderCollapse: "collapse", padding: 0 }}
              >
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  {item?.rows?.map((item,index) => {
                    if (item.title) {
                      return (
                        <>
                          <div key={index}>
                            <div
                              style={{
                                backgroundColor: item?.subtitle
                                  ? "#000"
                                  : "#e6e6e6",
                              }}
                            >
                              <h4
                                style={{
                                  color: item.subtitle ? "#fff" : "#000",
                                  textAlign: "center",
                                }}
                              >
                                {item.title}
                              </h4>
                            </div>
                          </div>
                          <div>
                            {item.rows.map((item,index) => {
                              return (
                                <tr key={index}>
                                  <td style={{}}>
                                    <p>{item.name}</p>
                                  </td>
                                  <td style={{}}>
                                    <input
                                      style={{
                                        width: "100%",
                                        border: "none",
                                        outline: "none",
                                        fontSize: 16,
                                      }}
                                      disabled
                                      value={item.price}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      style={{
                                        width: "100%",
                                        border: "none",
                                        outline: "none",
                                        fontSize: 16,
                                      }}
                                      name={item.name + item.price}
                                      onChange={(e) => {
                                        setForm((prevState) => ({
                                          ...prevState,
                                          [e.target.name]: e.target.value,
                                        }));
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      style={{
                                        width: "100%",
                                        border: "none",
                                        outline: "none",
                                        fontSize: 16,
                                      }}
                                      value={
                                        form[item.name + item.price]
                                          ? form[item.name + item.price] *
                                            item.price
                                          : ""
                                      }
                                      disabled
                                    />
                                  </td>
                                </tr>
                              );
                            })}
                          </div>
                        </>
                      );
                    }
                    return (
                      <tr key={index} style={{ padding: 20 }}>
                        <td>{item.name}</td>
                        <td>
                          <input
                            disabled
                            value={item.price}
                            style={{
                              width: "100%",
                              border: "none",
                              outline: "none",
                              fontSize: 16,
                            }}
                          />
                        </td>
                        <td>
                          <input
                            name={item.name + item.price}
                            onChange={(e) => {
                              setForm((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                              }));
                            }}
                            style={{
                              width: "100%",
                              border: "none",
                              outline: "none",
                              fontSize: 16,
                            }}
                          />
                        </td>
                        <td>
                          <input
                            style={{
                              width: "100%",
                              border: "none",
                              outline: "none",
                              fontSize: 16,
                            }}
                            value={
                              form[item.name + item.price]
                                ? form[item.name + item.price] * item.price
                                : ""
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 300, textAlign: "center" }}>
        <h2 style={{ fontWeight: "bold" }}>GLOBAL SMART PACKAGES SERIES</h2>

        <div style={{ marginTop: 80 }}>
          <div
            style={{
              display: "grid",
              padding: 10,
              gridGap: 10,
              gridTemplateColumns: "repeat(3,1fr)",
            }}
          >
            <div style={{}}>
              <div style={{ marginBottom: "10px" }}>
                <h4 style={{ fontWeight: "bold" }}>VOLUME PACKAGE</h4>
              </div>
              <table
                border={"1px solid #000"}
                style={{ borderCollapse: "collapse" }}
              >
                <thead></thead>
                <tbody>
                  {packages?.volume?.map((item,index) => {
                    return item?.rows?.map((item,index) => {
                      return (
                        <tr key={index}>
                          <td style={{ width: "50%" }}>
                            <p>{item.name}</p>
                          </td>
                          <td style={{}}>
                            <input
                              style={{
                                width: "100%",
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                              }}
                              disabled
                              value={item.price}
                            />
                          </td>
                          <td>
                            <input
                              style={{
                                width: "100%",
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                              }}
                              name={item.name + item.price}
                              onChange={(e) => {
                                setForm((prevState) => ({
                                  ...prevState,
                                  [e.target.name]: e.target.value,
                                }));
                              }}
                            />
                          </td>
                          <td>
                            <input
                              style={{
                                width: "100%",
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                              }}
                              value={
                                form[item.name + item.price]
                                  ? form[item.name + item.price] * item.price
                                  : ""
                              }
                              disabled
                            />
                          </td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>

            <div style={{}}>
              <div style={{ marginBottom: "10px" }}>
                <h4 style={{ fontWeight: "bold" }}>SEMESTER PACKAGE</h4>
              </div>
              <table
                border={"1px solid #000"}
                style={{ borderCollapse: "collapse" }}
              >
                <thead></thead>
                <tbody>
                  {packages?.semester?.map((item,index) => {
                    return item?.rows?.map((item,index) => {
                      return (
                        <tr key={index}>
                          <td style={{ width: "50%" }}>
                            <p>{item.name}</p>
                          </td>
                          <td style={{}}>
                            <input
                              style={{
                                width: "100%",
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                              }}
                              disabled
                              value={item.price}
                            />
                          </td>
                          <td>
                            <input
                              style={{
                                width: "100%",
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                              }}
                              name={item.name + item.price}
                              onChange={(e) => {
                                setForm((prevState) => ({
                                  ...prevState,
                                  [e.target.name]: e.target.value,
                                }));
                              }}
                            />
                          </td>
                          <td>
                            <input
                              style={{
                                width: "100%",
                                border: "none",
                                outline: "none",
                                fontSize: 16,
                              }}
                              value={
                                form[item.name + item.price]
                                  ? form[item.name + item.price] * item.price
                                  : ""
                              }
                              disabled
                            />
                          </td>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>

            <div style={{ marginRight: 10, marginTop: 20 }}>
              <table
                style={{ border: "1px solid #000", borderCollapse: "collapse" }}
              >
                <thead>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: 500, border: "1px solid #000" }}>
                      Packed By
                    </td>
                    <td style={{ width: 1200, border: "1px solid #000" }}></td>
                  </tr>
                  <tr>
                    <td style={{ width: 120, border: "1px solid #000" }}>
                      Created By
                    </td>
                    <td style={{ width: 1200, border: "1px solid #000" }}></td>
                  </tr>
                  <tr>
                    <td style={{ width: 100 }}>Billing By</td>
                    <td style={{ width: 1200, border: "1px solid #000" }}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h4 style={{ marginTop: 180, marginBottom: 100 }}>
            Signature & Stamp of the Customer
          </h4>
        </div>
      </div>
    </>
  );
};

export default Main;
