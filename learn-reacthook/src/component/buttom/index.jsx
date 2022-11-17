import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {};

function Button(props) {
  return <button className={props.class}>{props.value}</button>;
}

export default Button;
