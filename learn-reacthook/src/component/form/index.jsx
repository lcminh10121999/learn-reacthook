import React from "react";
import PropTypes from "prop-types";
import "./form.css";
import Button from "../buttom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import productApi from "../../api/todo.jsx";
import { useEffect } from "react";
Form.propTypes = {};

function Form(props) {
  const [msgError, setMsgError] = useState({});
  const [listItem, setListItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await productApi.getAll();
      setListItem(data);
    };
    getData();
  }, []);

  // console.log(listItem);
  const errors = {
    name: "",
    price: "",
    img: "",
    duplicate: "",
  };
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
  };

  let addNewCart = async (e) => {
    e.preventDefault(e);

    if (!inputData.name) {
      errors.name = "không được rỗng";
    }
    if (!inputData.price) {
      errors.price = "không được rỗng";
    }
    if (!inputData.img) {
      errors.img = "không được rỗng";
    }
    if (isNaN(inputData.price)) {
      errors.price = "phải là số";
    }
    setMsgError(errors);
    listItem.map((item, index) => {
      if (
        inputData.name == item.name &&
        inputData.price == item.price &&
        inputData.img == item.img
      ) {
        errors.duplicate = "sản phẩm đã tồn tại";
      }
    });
    if (
      !errors.name == "" ||
      !errors.price == "" ||
      !errors.img == "" ||
      !errors.duplicate == ""
    ) {
      return;
    }

    await axios.post("http://localhost:3030/DB_CARD", inputData);
    const path = "/";
    navigate(path);
  };

  let resetForm = (e) => {};
  return (
    <div className="row justify-content-center">
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 my-2 ">
        <form action="" onSubmit={addNewCart}>
          <div class="form-group d-flex">
            <label>Name</label>
            <input
              type="text"
              value={inputData.name}
              onChange={handelOnChange}
              name="name"
              class="form-control"
            ></input>
            <p>{msgError.name}</p>
          </div>
          <div class="form-group d-flex">
            <label>Price</label>
            <input
              type="text"
              value={inputData.price}
              onChange={handelOnChange}
              name="price"
              class="form-control"
            ></input>
            <p>{msgError.price}</p>
          </div>
          <div class="form-group d-flex">
            <label>Image</label>
            <input
              type="text"
              value={inputData.img}
              onChange={handelOnChange}
              name="img"
              class="form-control"
            ></input>
            <p>{msgError.img}</p>
          </div>
          <p className="">{msgError.duplicate}</p>
          <Button class="btn btn-success" value="save" />
          {/* <button className="btn btn-primary mx-2" onClick={resetForm}>
            Reset
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default Form;
