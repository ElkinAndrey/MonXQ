import React from "react";
import classes from "./Characteristics.module.css";
import ButtonLink from './../../ButtonLink/ButtonLink';

const Characteristics = ({ monitor, monitorError, isMonitorLoading }) => {
  return (
    <div className={classes.body}>
      {/* Ошибка */}
      {monitorError ? (
        <div>Не удалось получить доступ к серверу</div>
      ) : (
        <div>
          {/* Загрузка */}
          {isMonitorLoading ? (
            <div>Загрузка...</div>
          ) : (
            <div>
              {/* Данные */}
              <div className={classes.name}>{monitor.name}</div>
              <div className={classes.description}>{monitor.description}</div>
              <div className={classes.price}>{`Цена ${monitor.price}₽`}</div>
              <div style={{marginBottom: "30px"}}>
                <div className={classes.characteristics}>Характеристики</div>
                <div className={classes.characteristic}>{`Модель : ${{...monitor.characteristics}.model}`}</div>
                <div className={classes.characteristic}>{`Основной цвет : ${{...monitor.characteristics}.color}`}</div>
                <div className={classes.characteristic}>{`Диагональ экрана (дюйм) : ${{...monitor.characteristics}.screenDiagonal}`}</div>
                <div className={classes.characteristic}>{`Разрешение : ${{...monitor.characteristics}.permission}`}</div>
                <div className={classes.characteristic}>{`Технология изготовления матрицы : ${{...monitor.characteristics}.matrixManufacturingTechnology}`}</div>
                <div className={classes.characteristic}>{`Соотношение сторон : ${{...monitor.characteristics}.aspectRatio}`}</div>
                <div className={classes.characteristic}>{`Размер видимой области экрана : ${{...monitor.characteristics}.viewableScreenSize}`}</div>
                <div className={classes.characteristic}>{`Яркость :  ${{...monitor.characteristics}.brightness}`}</div>
                <div className={classes.characteristic}>{`Максимальная частота обновления экрана : ${{...monitor.characteristics}.screenRefreshRate}`}</div>
              </div>
              <ButtonLink to="/Buy">Купить</ButtonLink>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Characteristics;
