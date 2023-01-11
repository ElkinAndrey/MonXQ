import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink';
import Header from '../Header/Header';
import classes from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <Header />
      <div className={classes.info}>
        <div>Страница не найдена. <br/>Вернитесь на главную страницу.</div>
        <ButtonLink to="/Monitors">На главную</ButtonLink>
      </div>
    </div>
  )
}

export default Error