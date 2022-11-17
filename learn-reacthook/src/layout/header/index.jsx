import React from "react";
import PropTypes from "prop-types";
import "./header.css";
import { Outlet, Link } from "react-router-dom";
Header.propTypes = {};

function Header(props) {
  return (
    <div className="container-fluid header">
      <div class="row">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create_form">From Create</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
