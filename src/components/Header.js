import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu"></div>
      <Link to="/" className="item">
        All Streams
      </Link>
    </div>
  );
}

export default Header;
