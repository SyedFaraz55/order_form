import Link from "next/link";
import React from "react";
import AdminForm from "../../../Components/AdminForm";

const Admin = () => {
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
        </div>
      </header>
      <div style={{ marginTop: 20 }}>
        <AdminForm />
      </div>
    </div>
  );
};

export default Admin;
