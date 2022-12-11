import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const AdminForm = () => {
  const [form, setForm] = useState([]);
  const [sub, setSub] = useState(false);
  const [packageRow, setPackageRow] = useState({
    name: "",
    price: "",
    total: "",
  });
  const [packageForm, setPackageForm] = useState([]);
  const [value, setValue] = useState({
    title: "",
    subtitle: false,
    rows: [],
  });
  const [row, setRow] = useState({ name: "", price: "" });
  const [count, setCount] = useState(0);
  const [roots, setRoots] = useState([]);
  const [extra, setExtra] = useState();
  const ref = useRef();
  const add = () => {
    if (value.subtitle) {
      setForm((prevState) => [...prevState, { ...row, title: sub }]);
      setRow({ name: "", price: "" });
      console.log(form);
    } else {
      setForm((prevState) => [...prevState, row]);
      setRow({ name: "", price: "" });
      console.log(form);
    }
  };

  const addPackage = () => {
    setPackageForm((prevState) => [...prevState, packageRow]);
    setPackageRow({ name: "", price: "" });
  };

  const getCategories = async () => {
    const r = await axios.get("http://13.127.64.247:8000/category");
    if (r.data.ok) {
      setRoots(r.data.data);
    } else {
      alert("Failed to load categories");
      return;
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div style={{ padding: 10 }}>
      <select
        onChange={(e) =>
          setValue((prevState) => ({ ...prevState, title: e.target.value }))
        }
        style={{ width: 300, padding: 5 }}
      >
        <option>Select Group</option>
        {roots?.map((item) => {
          return <option value={item.title}>{item.title}</option>;
        })}
      </select>
      <br />

      <input
        value={value.title}
        className="input"
        placeholder="Title"
        onChange={(e) =>
          setValue((prevState) => ({ ...prevState, title: e.target.value }))
        }
      />
      {value.subtitle ? (
        <input
          className="input"
          placeholder="Subtitle"
          onChange={(e) => setSub(e.target.value)}
        />
      ) : null}
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        <input
          type={"checkbox"}
          onChange={(e) =>
            setValue((prevState) => ({
              ...prevState,
              subtitle: e.target.checked,
            }))
          }
        />{" "}
        Please check if this has sub-records
      </div>
      <input
        className="input"
        name="name"
        placeholder="Name"
        ref={ref}
        value={row.name}
        onChange={(e) =>
          setRow((prevState) => ({ ...prevState, name: e.target.value }))
        }
      />
      <input
        className="input"
        value={row.price}
        name="price"
        placeholder="Price"
        onChange={(e) =>
          setRow((prevState) => ({ ...prevState, price: e.target.value }))
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            ref.current.focus();
            add();
          }
        }}
      />

      <div style={{ padding: 5, marginTop: 10 }}>
        {form?.map((item, index) => {
          return (
            <div key={index} style={{ display: "flex" }}>
              <input
                onChange={(e) => {
                  const dup = [...form];
                  dup[index].name = e.target.value;
                  setForm(dup);
                }}
                value={item.name}
                style={{ background: "#fff", padding: 5 }}
              />
              <input
                onChange={(e) => {
                  const dup = [...form];
                  dup[index].price = e.target.value;
                  setForm(dup);
                }}
                value={item.price}
                style={{ background: "#fff", padding: 5 }}
              />
              <p
                onClick={() => {
                  const r = form.filter((itx) => itx.name != item.name);
                  setForm(r);
                }}
                style={{ color: "red", marginLeft: 10, cursor: "pointer" }}
              >
                Delete
              </p>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: 15 }}>
        <button className="bn59" onClick={add}>
          Add
        </button>
        <button
          className="button-9"
          style={{ width: 200, marginLeft: 10 }}
          onClick={() => {
            let payload = null;

            if (value.title == "") {
              alert("Title is required");
              return;
            }

            if (sub) {
              if (value.subtitle == "") {
                alert("Please add subtitle");
                return;
              }
            }

            if (form.length === 0) {
              alert("Please add atleast one record");
              return;
            }

            if (value.subtitle) {
              payload = {
                ...value,
                rows: [
                  {
                    title: sub,
                    rows: [...form],
                  },
                ],
              };
            } else {
              payload = { ...value, rows: form };
            }

            axios
              .post("http://13.127.64.247:8000/send", payload)
              .then((res) => {
                if (res.data.ok) {
                  alert("Record Added");
                  window.location.reload();
                } else {
                  alert("Failed to add");
                }
              })
              .catch((err) => console.log(err));
          }}
        >
          Submit
        </button>
      </div>
      <div style={{ marginTop: 30 }}>
        <h3>Packages</h3>
        <div>
          <select
            style={{ width: 300, padding: 5, marginTop: 10 }}
            onChange={(e) => setExtra(e.target.value)}
          >
            <option value={""}>Select Package</option>
            <option value={1}>Volume Package</option>
            <option value={2}>Semester Package</option>
          </select>
        </div>
        <div style={{ marginTop: 20 }}>
          <input
            className="input"
            placeholder="Name"
            ref={ref}
            value={packageRow.name}
            onChange={(e) =>
              setPackageRow((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <input
            className="input"
            value={packageRow.price}
            placeholder="Price"
            onChange={(e) =>
              setPackageRow((prevState) => ({
                ...prevState,
                price: e.target.value,
              }))
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ref.current.focus();
                addPackage();
              }
            }}
          />
          <div style={{ padding: 5, marginTop: 10 }}>
            {packageForm?.map((item, index) => {
              return (
                <div key={index} style={{ display: "flex" }}>
                  <input
                    onChange={(e) => {
                      const dup = [...packageForm];
                      dup[index].name = e.target.value;
                      setPackageForm(dup);
                    }}
                    value={item.name}
                    style={{ background: "#fff", padding: 5 }}
                  />
                  <input
                    onChange={(e) => {
                      const dup = [...packageForm];
                      dup[index].price = e.target.value;
                      setPackageForm(dup);
                    }}
                    value={item.price}
                    style={{ background: "#fff", padding: 5 }}
                  />
                  <p
                    onClick={() => {
                      const r = packageForm.filter(
                        (itx) => itx.name != item.name
                      );
                      setPackageForm(r);
                    }}
                    style={{ color: "red", marginLeft: 10, cursor: "pointer" }}
                  >
                    Delete
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <button
              onClick={() => {
                if (extra == 1) {
                  axios.post("http://13.127.64.247:8000/volume",{
                    id:extra,
                    rows:packageForm
                  }).then(res =>{
                    if(res.data.ok) {
                      alert("Added");
                      window.location.href ='/v1/admin'
                    } else {
                      alert("Failed to add package")
                    }
                  }).catch(err => alert(err.toString()))
                } else if (extra == 2) {
                  axios.post("http://13.127.64.247:8000/semester",{
                    id:extra,
                    rows:packageForm
                  }).then(res =>{
                    if(res.data.ok) {
                      alert("Added");
                      window.location.href ='/v1/admin'
                    } else {
                      alert("Failed to add package")
                    }
                  }).catch(err => alert(err.toString()))
                } else {
                  alert("Please select package");
                }
              }}
              className="button-9"
              style={{ width: 200, marginTop: 10 }}
            >
              Add Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
