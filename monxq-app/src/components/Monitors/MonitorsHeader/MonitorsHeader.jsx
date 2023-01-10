import React from "react";
import classes from "./MonitorsHeader.module.css";

const MonitorsHeader = () => {
  let header = document.getElementsByClassName(classes.body).item(0);

  document.addEventListener("scroll", function () {
    // Get the scroll position
    let scrollPos = window.pageYOffset;

    if (scrollPos > 100) {
      header.style.backgroundColor = "#141f2b";
    } else {
      header.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }
  });

  return (
    <div className={classes.body}>
      <div className={classes.logo}>МонXQ</div>
    </div>
  );
};

export default MonitorsHeader;
