import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useFetching } from "./../hooks/useFetching";
import MonitorsService from "./../../API/MonitorsService";
import { useEffect } from "react";

const Monitors = () => {
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
                  <div>
                    <div>{monitor.id}</div>
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
  );
};

export default Monitors;
