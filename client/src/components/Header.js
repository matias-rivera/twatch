import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <label className="logo">Home</label>
      </Link>
      <ul>
        <Link to="/">
          <li>Streams</li>
        </Link>
        <GoogleAuth />
      </ul>
    </nav>
  );
};

export default Header;
