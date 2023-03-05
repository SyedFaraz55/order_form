import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { data, extras } from "../data";

const Main = React.memo(() => {
  const [form, setForm] = useState([
    {
      title: "WHIZKID",
      subtitle: true,
      rows: [
        {
          title: "Term / Semester Set",
          rows: [
            { name: "Nursery", price: 699, total: "" },
            { name: "LKG", price: 1149, total: "" },
            { name: "UKG", price: 1199, total: "" },
            { name: "Standard 1", price: 1299, total: "" },
            { name: "Standard 2", price: 1349, total: "" },
            { name: "Standard 3", price: 1399, total: "" },
            { name: "Standard 4", price: 1499, total: "" },
            { name: "Standard 5", price: 1499, total: "" },
          ],
        }
      ],
      order: 1,
    },

    {
      title: "Global Smart",
      area:"areaA",
      subtitle: true,
      rows: [
        {
          title: "Term / Semester Set",
          rows: [
            { name: "Nursery", price: 899, total: "" },
            { name: "LKG", price: 1699, total: "" },
            { name: "UKG", price: 1799, total: "" },
            { name: "Standard 1", price: 1999, total: "" },
            { name: "Standard 2", price: 2099, total: "" },
            { name: "Standard 3", price: 2199, total: "" },
            { name: "Standard 4", price: 2299, total: "" },
            { name: "Standard 5", price: 2399, total: "" },
          ],
        }
      ],
      order: 2,
    },

    {
      title: "Smart Learn",
      subtitle: true,
      area:"areaB",
      rows: [
        {
          title: "Term / Semester Set",
          rows: [
            { name: "Nursery", price: 899, total: "" },
            { name: "LKG", price: 1129, total: "" },
            { name: "UKG", price: 1199, total: "" },
            { name: "Standard 1", price: 1219, total: "" },
            { name: "Standard 2", price: 1259, total: "" },
            { name: "Standard 3", price: 1299, total: "" },
            { name: "Standard 4", price: 1359, total: "" },
            { name: "Standard 5", price: 1399, total: "" },
          ],
        },
        {
          title: "Telugu",
          rows: [
            { name: "Nursery", price: 199, total: "" },
            { name: "LKG", price: 139, total: "" },
            { name: "UKG", price: 189, total: "" },
            { name: "Standard 1", price: 189, total: "" },
            { name: "Standard 2", price: 189, total: "" },
            { name: "Standard 3", price: 189, total: "" },
            { name: "Standard 4", price: 199, total: "" },
            { name: "Standard 5", price: 199, total: "" },
          ],
        },
        {
          title: "Hindi",
          rows: [
            { name: "UKG", price: 119, total: "" },
            { name: "Standard 1", price: 149, total: "" },
            { name: "Standard 2", price: 149, total: "" },
            { name: "Standard 3", price: 149, total: "" },
            { name: "Standard 4", price: 159, total: "" },
            { name: "Standard 5", price: 159, total: "" },
          ],
        }
      ],
      order: 3,
    },

    {
      title: "CBSE Books(Individuals)",
      subtitle: true,
      rows: [
        {
          title: "Intensive English",
          rows: [
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        },
        {
          title: "Magical Mathematics",
          rows: [
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        },
        {
          title: "Telugu (32pgs)",
          rows: [
            {name:"UKG",price:69,total:""},
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        },
        {
          title: "Hindi (32pgs)",
          rows: [
            {name:"UKG",price:69,total:""},
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        },
        {
          title: "Cursive Writing (32pgs)",
          rows: [
            {name:"UKG",price:69,total:""},
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        },
        {
          title: "Genius EVS",
          rows: [
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        },
        {
          title: "Spectrum Science",
          rows: [
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        },
        {
          title: "Amazing Social",
          rows: [
            { name: "Standard 1", price: 339, total: "" },
            { name: "Standard 2", price: 349, total: "" },
            { name: "Standard 3", price: 359, total: "" },
            { name: "Standard 4", price: 409, total: "" },
            { name: "Standard 5", price: 419, total: "" },
          ],
        }
      ],
      order: 4,
    },



    // // workbook

    // {
    //   title: "Workbooks",
    //   subtitle: true,
    //   rows: [
    //     {
    //       title: "English",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //     {
    //       title: "EVS",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //     {
    //       title: "Science",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //     {
    //       title: "Social",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //     {
    //       title: "Telugu",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //   ],
    //   order: 5,
    // },

    // // indivial series

    // {
    //   title: "Individual Series",
    //   subtitle: true,
    //   rows: [
    //     {
    //       title: "Nursery",
    //       rows: [
    //         { name: "My 1st Book ABC", price: 339, total: "" },
    //         { name: "Number Book 1-50", price: 349, total: "" },
    //         { name: "Picture  Dictionary", price: 359, total: "" },
    //         { name: "Rhymes", price: 409, total: "" },
    //       ],
    //     },
    //     {
    //       title: "LKG",
    //       rows: [
    //         { name: "English", price: 199, total: "" },
    //         { name: "Mathematics", price: 199, total: "" },
    //       ],
    //     },
    //     {
    //       title: "Science",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //     {
    //       title: "Social",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //     {
    //       title: "Telugu",
    //       rows: [
    //         { name: "Standard 1", price: 339, total: "" },
    //         { name: "Standard 2", price: 349, total: "" },
    //         { name: "Standard 3", price: 359, total: "" },
    //         { name: "Standard 4", price: 409, total: "" },
    //         { name: "Standard 5", price: 419, total: "" },
    //       ],
    //     },
    //   ],
    //   order: 6,
    // },


    // // kannada

    {
      title: 'Kannada Books',
      subtitle: true,
      rows: [
        {
          title: 'Kannada Copy Books',
          rows: [
            { name: 'Standard 1', price: 99, total: '' },
            { name: 'Standard 2', price: 99, total: '' },
            { name: 'Standard 3', price: 99, total: '' },
            { name: 'Standard 4', price: 99, total: '' },
            { name: 'Standard 5', price: 99, total: '' },
          ],
        },
        {
          title: 'Kannada Individual',
          rows: [
            { name: 'Kannada Varnamala', price: 99, total: '' },
            { name: 'Kannada Ka-Gunintha', price: 99, total: '' },
            { name: 'Kannada Vachaka-A ', price: 99, total: '' },
            { name: 'Kannada Vachaka-B ', price: 99, total: '' },
          ],
        },
        {
          title: 'Kannada Semesters (Set of 2 Books)',
          rows: [
            { name: 'Kannada LKG', price: 849, total: '' },
            { name: 'Kannada UKG', price: 949, total: '' },
            { name: 'EVS', price: 169, total: '' },
            { name: 'Rhymes (LKG)', price: 119, total: '' },
          ],
        },
        {
          title: 'UKG',
          rows: [
            { name: 'English', price: 209, total: '' },
            { name: 'Mathematics', price: 209, total: '' },
            { name: 'EVS', price: 179, total: '' },
            { name: 'Rhymes(UKG)', price: 179, total: '' },
          ],
        },
        {
          title: 'Art & Colour',
          rows: [
            { name: 'Art & Colour-A', price: 99, total: '' },
            { name: 'Art & Colour-B', price: 99, total: '' },
            { name: 'Art & Colour-C', price: 99, total: '' },
            { name: 'Standard 1', price: 99, total: '' },
            { name: 'Standard 2', price: 99, total: '' },
            { name: 'Standard 3', price: 99, total: '' },
            { name: 'Standard 4', price: 99, total: '' },
            { name: 'Standard 5', price: 99, total: '' },
          ],
        },
        {
          title: 'Computer',
          rows: [
            { name: 'Standard 1', price: 99, total: '' },
            { name: 'Standard 2', price: 99, total: '' },
            { name: 'Standard 3', price: 99, total: '' },
            { name: 'Standard 4', price: 99, total: '' },
            { name: 'Standard 5', price: 99, total: '' },
          ],
        },
        {
          title: 'Grammar',
          rows: [
            { name: 'Standard 1', price: 149, total: '' },
            { name: 'Standard 2', price: 149, total: '' },
            { name: 'Standard 3', price: 159, total: '' },
            { name: 'Standard 4', price: 159, total: '' },
            { name: 'Standard 5', price: 179, total: '' },
          ],
        },
      ],
      order: 7,
    },
    {
      title: 'Copy Books',
      subtitle: true,
      rows: [
        {
          title: 'Telugu (80 Pgs)',
          rows: [
            { name: 'UKG', price: 149, total: '' },
            { name: 'Standard 1', price: 149, total: '' },
            { name: 'Standard 2', price: 149, total: '' },
            { name: 'Standard 3', price: 149, total: '' },
            { name: 'Standard 4', price: 149, total: '' },
            { name: 'Standard 5', price: 149, total: '' },
          ],
        },
        {
          title: 'Hindi (80 Pgs)',
          rows: [
            { name: 'UKG', price: 149, total: '' },
            { name: 'Standard 1', price: 149, total: '' },
            { name: 'Standard 2', price: 149, total: '' },
            { name: 'Standard 3', price: 149, total: '' },
            { name: 'Standard 4', price: 149, total: '' },
            { name: 'Standard 5', price: 149, total: '' },
          ],
        },
        {
          title: 'Cursive Writing (80 Pgs)',
          rows: [
            { name: 'UKG', price: 149, total: '' },
            { name: 'Standard 1', price: 149, total: '' },
            { name: 'Standard 2', price: 149, total: '' },
            { name: 'Standard 3', price: 149, total: '' },
            { name: 'Standard 4', price: 149, total: '' },
            { name: 'Standard 5', price: 149, total: '' },
          ]
        },
        {
          title: 'Print Script (80 Pgs)',
          rows: [
            { name: 'Standard 1', price: 149, total: '' },
            { name: 'Standard 2', price: 149, total: '' },
            { name: 'Standard 3', price: 149, total: '' },
            { name: 'Standard 4', price: 149, total: '' },
            { name: 'Standard 5', price: 149, total: '' },
          ],
        },
        {
          title: 'Lucida Caligraphy',
          rows: [
            { name: 'Standard 1', price: 159, total: '' },
            { name: 'Standard 2', price: 159, total: '' },
            { name: 'Standard 3', price: 159, total: '' },
            { name: 'Standard 4', price: 159, total: '' },
            { name: 'Standard 5', price: 159, total: '' },
          ],
        },
        {
          title: 'Practice Books',
          rows: [
            { name: 'ABC Capital', price: 179, total: '' },
            { name: 'ABC Capital & Small', price: 179, total: '' },
            { name: 'Number Book 1-50', price: 179, total: '' },
            { name: 'Number Book 1-100', price: 179, total: '' },
            { name: 'Home Task (Big)', price: 249, total: '' },
            { name: 'Home Task (Small)', price: 159, total: '' },
            { name: 'Hindi Varnamala', price: 179, total: '' },
            { name: 'Telugu Varnamala', price: 179, total: '' },
            { name: 'Telugu Guninthalu', price: 139, total: '' },
            { name: 'Table Book Big', price: 99, total: '' },
            { name: 'Table Book', price: 39, total: '' },
          ],
        }
      ],
      order:8
      }
  ]);
  const [records, setRecords] = useState([]);

  const handleCalc = async (e, org, item, first) => {
    const dup = [...form];
    console.table({ org: org, item: item, first })

    const original = org.rows[0].rows;
    const selectedIndex = original.indexOf(item);
    original[selectedIndex].total = item.price * e.target.value;
    const indxe = form.indexOf(original);

    dup[indxe] = original;
    setForm(dup)
  }




  return (
    <div style={{ }}>
      <div className="grid grid-3" style={{ padding: 0, margin: 0 }}>
        {form?.map((org, index) => {
          return (
            <div  key={index} style={{ border: "1px solid #000", padding: 0 }}>
              <div
                style={{
                  backgroundColor: org?.subtitle ? "#000" : "#e6e6e6",
                }}
              >
                <h4
                  style={{
                    color: org.subtitle ? "#fff" : "#000",
                    textAlign: "center",
                  }}
                >
                  {org.title}
                </h4>
              </div>
              <table
                border={"1px solid #000"}
                style={{ borderCollapse: "collapse", padding: 0 , width:"100%"}}
              >
                <thead>
                  <th></th>
                  <th></th>
                  <th></th>
                </thead>
                <tbody>
                  {org?.rows?.map((first, index) => {
                    if (first.title) {
                      return (
                        <>
                          <div key={index}>
                            <div
                              style={{
                                backgroundColor: first?.subtitle
                                  ? "#000"
                                  : "#e6e6e6",
                              }}
                            >
                              <h4
                                style={{
                                  color: first.subtitle ? "#fff" : "#000",
                                  textAlign: "center",
                                }}
                              >
                                {first.title}
                              </h4>
                            </div>
                          </div>
                          <div>
                            {first.rows.map((item, index) => {
                              return (
                                <tr style={{width:"auto"}} key={index}>
                                  <td style={{}}>
                                  <input
                                      style={{
                                        width: "100%",
                                        border: "none",
                                        outline: "none",
                                        fontSize: 16,
                                      }}
                                      disabled
                                      value={item.name}
                                    />
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
                                        width: "60%",
                                        border: "none",
                                        outline: "none",
                                        fontSize: 16,
                                      }}
                                      onBlur={(e) => handleCalc(e, org, item, first)}
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
                                        item.total
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
      {/* <div style={{ marginTop: 300, textAlign: "center" }}>
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



          </div>

          <h4 style={{ marginTop: 180, marginBottom: 100 }}>
            Signature & Stamp of the Customer
          </h4>
        </div>
      </div> */}
    </div>
  );
});

export default Main;
