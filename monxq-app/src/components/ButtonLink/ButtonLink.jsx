import React from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonLink.module.css";

const ButtonLink = ({ children, to, ...props }) => {
  return (
    <div {...props}>
      <Link to={to} className={classes.button}>
        {children}
      </Link>
    </div>
  );
};

export default ButtonLink;
