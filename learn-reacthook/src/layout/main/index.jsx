import React from "react";
import PropTypes from "prop-types";
import "./main.css";
import ListItem from "../../component/ListItem";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Form from "../../component/form";

Main.propTypes = {};

function Main(props) {
  return (
    <div className="container-fluid main">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Routes>
            <Route path="/" element={<ListItem />} />
            <Route path="/create_form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Main;
