import React from "react";
import classes from "./MonitorsList.module.css";
import MonitorFromList from "../MonitorFromList/MonitorFromList";
import Input from "./../../Input/Input";

const MonitorsList = ({
  monitors,
  isMonitorLoading,
  monitorError,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div id="monitors">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={classes.name}>Мониторы</div>
        <Input
          style={{ marginLeft: "30px" }}
          placeholder="Найти монитор"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
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
                <div className={classes.monitors}>
                  {monitors.map((monitor) => (
                    <div key={monitor._id}>
                      <MonitorFromList monitor={monitor} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MonitorsList;
