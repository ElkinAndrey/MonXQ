import React from "react";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes.body}>
        <img src="./img/background.png" alt={""} className={classes.image} />
        <div className={classes.info}>
          <div className={classes.logo}>Сайт по продаже мониторов</div>
          <div className={classes.text}>
            Выбор подходящего монитора - непростое дело. Кому-то монитор нужен
            для игр, кому-то для работы или просмотра сериалов. Здесь вы можете
            найти монитор на любой вкус и по любой цене. Главное выбирайте с
            умом.
          </div>
        </div>
    </div>
  );
};

export default Welcome;
