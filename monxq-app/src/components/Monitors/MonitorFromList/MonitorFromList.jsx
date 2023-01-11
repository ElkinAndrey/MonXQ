import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./MonitorFromList.module.css";

const MonitorFromList = ({ monitor }) => {

  let history = useNavigate();

  const redirect = () => {
    history(`${monitor._id}`);
  };

  return (
    <button className={classes.body} onClick={redirect}>
      <img
        src={`./img/${monitor._id}.png`}
        alt={""}
        className={classes.image}
      />
      <div className={classes.name}>{monitor.name}</div>
      <div className={classes.price}>{monitor.price}</div>
      <div className={classes.description}>
        {monitor.description}
      </div>
    </button>
  );
};

export default MonitorFromList;
