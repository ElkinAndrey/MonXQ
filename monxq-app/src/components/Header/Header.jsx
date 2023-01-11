import React from "react";
import classes from "./Header.module.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.body}>
      <div className={classes.logo}>МонXQ</div>
      <Link to="/Monitors" className={classes.main}>На главную</Link>
    </div>
  );
};

export default Header;
