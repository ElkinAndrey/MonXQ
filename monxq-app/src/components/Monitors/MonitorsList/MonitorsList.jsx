import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import classes from "./MonitorsList.module.css";
import MonitorsService from "./../../../API/MonitorsService";
import { useFetching } from "./../../hooks/useFetching";
import MonitorFromList from "../MonitorFromList/MonitorFromList";

const MonitorsList = () => {
  const dataFetchedRef = useRef(false);
  const [monitors, setMonitors] = useState([]);

  const [fetchMonitor, isMonitorLoading, monitorError] = useFetching(
    async () => {
      const data = await MonitorsService.getMonitors();
      setMonitors(data);
    }
  );

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchMonitor();
  }, []);

  return (
    <div>
      <div className={classes.name}>Мониторы</div>
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
                      <MonitorFromList monitor={monitor}/>
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
