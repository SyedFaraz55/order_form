import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, extras } from "../data";

const Main = () => {
  const [form, setForm] = useState({});
  const [records, setRecords] = useState([]);
  const [packages, setPackages] = useState([]);

  const getRecords = () => {
    axios
      .get("https://infopublishers.onrender.com/records")
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
      .get("https://infopublishers.onrender.com/getPackages")
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
        {data?.map((item) => {
          console.log(item, "item");
          return (
            <div style={{ border: "1px solid #000" }} className="content flow">
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "#e6e6e6",
                  borderBottom: "1px solid #000",
                }}
              >
                <div
                  style={{
                    backgroundColor: item?.subtitle ? "#000" : "#e6e6e6",
                  }}
                >
                  <h3 style={{ color: item.subtitle ? "#fff" : "#000" }}>
                    {item.title}
                  </h3>
                </div>
              </div>
              {item.rows.map((item) => {
                if (item.title) {
                  return (
                    <>
                      <div
                        style={{
                          textAlign: "center",
                          backgroundColor: "#e6e6e6",
                          borderBottom: "1px solid #000",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: item?.subtitle
                              ? "#000"
                              : "#e6e6e6",
                          }}
                        >
                          <h3
                            style={{ color: item.subtitle ? "#fff" : "#000" }}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <div>
                        {item.rows.map((item) => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                width: "100%",
                                borderBottom: "1px solid #000",
                                paddingBottom: 10,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <div style={{ width: "100%" }}>
                                <p>{item.name}</p>
                              </div>
                              <div style={{}}>
                                <input
                                  style={{
                                    width: "100%",
                                    fontSize: 16,
                                  }}
                                  disabled
                                  value={item.price}
                                />
                              </div>
                              <div>
                                <input
                                  style={{
                                    fontSize: 16,
                                    width: "100%",
                                  }}
                                  name={item.name + item.price}
                                  onChange={(e) => {
                                    setForm((prevState) => ({
                                      ...prevState,
                                      [e.target.name]: e.target.value,
                                    }));
                                  }}
                                />
                              </div>
                              <div>
                                <input
                                  style={{
                                    fontSize: 16,
                                    width: "100%",
                                  }}
                                  value={
                                    form[item.name + item.price]
                                      ? form[item.name + item.price] *
                                        item.price
                                      : ""
                                  }
                                  disabled
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                }
                return (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      borderBottom: "1px solid #000",
                      paddingBottom: 10,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <p>{item.name}</p>
                    </div>
                    <div style={{}}>
                      <input
                        style={{
                          width: "100%",
                          fontSize: 16,
                        }}
                        disabled
                        value={item.price}
                      />
                    </div>
                    <div>
                      <input
                        style={{
                          fontSize: 16,
                          width: "100%",
                        }}
                        name={item.name + item.price}
                        onChange={(e) => {
                          setForm((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                          }));
                        }}
                      />
                    </div>
                    <div>
                      <input
                        style={{
                          fontSize: 16,
                          width: "100%",
                        }}
                        value={
                          form[item.name + item.price]
                            ? form[item.name + item.price] * item.price
                            : ""
                        }
                        disabled
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 180, textAlign: "center" }}>
        <h2 style={{ fontWeight: "bold" }}>GLOBAL SMART PACKAGES SERIES</h2>

        <div style={{ marginTop: 30 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "40% 40% 20%",
            }}
          >
            <div style={{}}>
              <div
                style={{
                  backgroundColor: "#e6e6e6",
                  width: "90%",
                  padding: 5,
                  border: "1px solid #000",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>VOLUME PACKAGE</h4>
              </div>
              <table>
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  {packages?.volume?.map((item) => {
                    return item?.rows?.map((item) => {
                      return (
                        <tr>
                          <tr style={{ width: "100%" }}>
                            <p>{item.name}</p>
                          </tr>
                          <tr style={{}}>
                            <input
                              style={{
                                width: "100%",
                                fontSize: 16,
                              }}
                              disabled
                              value={item.price}
                            />
                          </tr>
                          <tr>
                            <input
                              style={{
                                fontSize: 16,
                                width: "100%",
                              }}
                              name={item.name + item.price}
                              onChange={(e) => {
                                setForm((prevState) => ({
                                  ...prevState,
                                  [e.target.name]: e.target.value,
                                }));
                              }}
                            />
                          </tr>
                          <tr>
                            <input
                              style={{
                                fontSize: 16,
                                width: "100%",
                              }}
                              value={
                                form[item.name + item.price]
                                  ? form[item.name + item.price] * item.price
                                  : ""
                              }
                              disabled
                            />
                          </tr>
                        </tr>
                      );
                    });
                  })}
                </tbody>
              </table>
            </div>

            <div style={{}}>
              <div
                style={{
                  backgroundColor: "#e6e6e6",
                  width: "90%",
                  padding: 5,
                  border: "1px solid #000",
                }}
              >
                <h4 style={{ fontWeight: "bold" }}>SEMESTER PACKAGE</h4>
              </div>
              <table>
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  {packages?.semester?.map((item) => {
                    return item?.rows?.map((item) => {
                      return (
                        <tr>
                          <tr style={{ width: "100%" }}>
                            <p>{item.name}</p>
                          </tr>
                          <tr style={{}}>
                            <input
                              style={{
                                width: "100%",
                                fontSize: 16,
                              }}
                              disabled
                              value={item.price}
                            />
                          </tr>
                          <tr>
                            <input
                              style={{
                                fontSize: 16,
                                width: "100%",
                              }}
                              name={item.name + item.price}
                              onChange={(e) => {
                                setForm((prevState) => ({
                                  ...prevState,
                                  [e.target.name]: e.target.value,
                                }));
                              }}
                            />
                          </tr>
                          <tr>
                            <input
                              style={{
                                fontSize: 16,
                                width: "100%",
                              }}
                              value={
                                form[item.name + item.price]
                                  ? form[item.name + item.price] * item.price
                                  : ""
                              }
                              disabled
                            />
                          </tr>
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
