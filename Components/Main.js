import React, { useState } from "react";
import { data } from "../data.json";
const Main = () => {
  const [form, setForm] = useState({});
  return (
    <div className="grid">
      {data?.map((item) => {
        return (
          <div style={{ border:"1px solid #000" }} className="content flow">
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#e6e6e6",
                borderBottom: "1px solid #000",
              }}
            >
              <div
                style={{ backgroundColor: item?.subtitle ? "#000" : "#e6e6e6" }}
              >
                <h3 style={{ color: item.subtitle ? "#fff" : "#000" }}>
                  {item.title}
                </h3>
              </div>
              <div>
                <h4>{item.subtitle}</h4>
              </div>
            </div>
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
  );
};

export default Main;
