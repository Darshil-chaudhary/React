import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "35px",
        listStyle: "none",
        margin: "0",
        padding: "18px 30px",
        backgroundColor: "#1e293b",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <li>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px 18px",
            borderRadius: "6px",
          }}
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          to="/About"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px 18px",
            borderRadius: "6px",
          }}
        >
          About
        </Link>
      </li>

      <li>
        <Link
          to="/blog"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px 18px",
            borderRadius: "6px",
          }}
        >
          Blog
        </Link>
      </li>

      <li>
        <Link
          to="/contact"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "600",
            padding: "10px 18px",
            borderRadius: "6px",
          }}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;