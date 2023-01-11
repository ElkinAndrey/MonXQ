import React from "react";
import classes from "./Input.module.css";

const Input = ({ placeholder, value, onChange, ...props }) => {
  return (
    <div {...props}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes.input}
      />
    </div>
  );
};

export default Input;
