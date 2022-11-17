import React from "react";
import PropTypes from "prop-types";
import "./cartItem.css";
import Button from "../buttom";
CartItem.propTypes = {};

function CartItem(props) {
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 my-2">
      <div class="card">
        <div className="card-body">
          <img src={props.img} alt="" />
          <h5 className="card-title">{props.name}</h5>
          <h5 className="card-text">{props.price}</h5>
          <Button class="btn btn-success" value="add to cart" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
