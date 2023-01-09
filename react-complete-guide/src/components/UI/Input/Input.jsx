import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${classes.input} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onCountChange}
      />
    </div>
  );
};

export default Input;
