import React from "react";
import classes from "./MonitorFromList.module.css";

const MonitorFromList = ({ monitor }) => {
  return (
    <button className={classes.body}>
      <img
        src={`./img/${monitor._id}.png`}
        alt={""}
        className={classes.image}
      />
      <div className={classes.name}>{monitor.name}</div>
      <div className={classes.price}>{monitor.price}</div>
      <div className={classes.description}>
        {monitor.description + monitor.description + monitor.description}
      </div>
    </button>
  );
};

export default MonitorFromList;
