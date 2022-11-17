import React from "react";
import PropTypes from "prop-types";
import "./form.css";
import Button from "../buttom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
Form.propTypes = {};

function Form(props) {
  const navigate = useNavigate();
  const defaultValue = {
    name: "",
    price: "",
    img: "",
    id: uuidv4(),
  };
  const [inputData, serInputData] = useState(defaultValue);

  let handelOnChange = (e) => {
    serInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(inputData);
  };

  let addNewCart = async (e) => {
    e.preventDefault(e);
    await axios.post("http://localhost:3030/DB_CARD", inputData);
    const path = "/";
    navigate(path);
  };
  return (
    <div className="row justify-content-center">
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 my-2 ">
        <form action="" onSubmit={addNewCart}>
          <div class="form-group d-flex">
            <label>Name</label>
            <input
              type="text"
              onChange={handelOnChange}
              name="name"
              class="form-control"
            ></input>
          </div>
          <div class="form-group d-flex">
            <label>Price</label>
            <input
              type="text"
              onChange={handelOnChange}
              name="price"
              class="form-control"
            ></input>
          </div>
          <div class="form-group d-flex">
            <label>Image</label>
            <input
              type="text"
              onChange={handelOnChange}
              name="img"
              class="form-control"
            ></input>
          </div>
          <Button class="btn btn-success" value="save" />
        </form>
      </div>
    </div>
  );
}

export default Form;
