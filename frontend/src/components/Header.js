import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import GoogleAuth from "../components/GoogleAuth";
function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
