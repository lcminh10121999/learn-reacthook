import React from "react";
import PropTypes from "prop-types";
import CartItem from "../cartitem";
import "./listitem.css";
import { useState } from "react";
import { useEffect } from "react";
import productApi from "../../api/todo.jsx";
ListItem.propTypes = {};

function ListItem(props) {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await productApi.getAll();
      setListItem(data);
    };

    getData();
  }, []);
  return (
    <div className="row justify-content-start">
      {listItem.map((item, index) => {
        return <CartItem name={item.name} img={item.img} price={item.price} />;
      })}
    </div>
  );
}

export default ListItem;
