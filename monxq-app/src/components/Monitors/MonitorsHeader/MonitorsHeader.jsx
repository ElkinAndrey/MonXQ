import React from "react";
import classes from "./MonitorsHeader.module.css";

const MonitorsHeader = () => {
  let header = document.getElementsByClassName(classes.body).item(0);

  document.addEventListener("scroll", function () {
    // Get the scroll position
    let scrollPos = window.pageYOffset;

    if (header=== null){
      return;
    }

    if (scrollPos <= 100) {
      if (header.classList.contains(classes.background)) {
        header.classList.remove(classes.background);
      }
    } else {
      if (!header.classList.contains(classes.background)) {
        header.classList.add(classes.background);
      }
    }
  });

  return (
    <div className={classes.body}>
      <div className={classes.logo}>МонXQ</div>
    </div>
  );
};

export default MonitorsHeader;
