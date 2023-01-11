import React from "react";
import classes from "./MonitorFromList.module.css";

const MonitorFromList = ({ monitor }) => {
  return (
    <div className={classes.body}>
      <div>{monitor._id}</div>
      <div>{monitor.name}</div>
      <div>{monitor.price}</div>
      <div>{monitor.description}</div>
    </div>
  );
};

export default MonitorFromList;
