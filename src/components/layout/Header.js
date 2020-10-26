import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Bucket</h1> || <h1>List</h1>
      <Link to="/">
        Home
      </Link>{" "}
      <Link to="/about">
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  marginTop: "7px",
};


export default Header;
