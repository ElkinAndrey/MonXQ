import React from "react";
import classes from "./Buy.module.css";
import Header from './../Header/Header';
import ButtonLink from './../ButtonLink/ButtonLink';

const Buy = () => {
  return (
    <div>
      <Header />
      <div className={classes.info}>
        <div>
          Покупка мониторов временно недоступна.
        </div>
        <ButtonLink to="/Monitors">На главную</ButtonLink>
      </div>
    </div>
  );
};

export default Buy;
