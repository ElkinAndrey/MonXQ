import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import classes from "./MonitorsList.module.css";
import MonitorsService from "./../../../API/MonitorsService";
import { useFetching } from "./../../hooks/useFetching";

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
      <div>Мониторы</div>
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
                <div>
                  {monitors.map((monitor) => (
                    <div key={monitor._id}>
                      <div>{monitor._id}</div>
                      <div>{monitor.name}</div>
                      <div>{monitor.price}</div>
                      <div>{monitor.description}</div>
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
