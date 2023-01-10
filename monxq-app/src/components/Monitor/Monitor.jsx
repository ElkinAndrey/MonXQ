import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MonitorsService from "./../../API/MonitorsService";
import { useFetching } from "./../hooks/useFetching";

const Monitor = () => {
  const dataFetchedRef = useRef(false);
  const params = useParams();
  const [monitor, setMonitor] = useState({});

  const [fetchMonitor, isMonitorLoading, monitorError] = useFetching(
    async (id) => {
      const data = await MonitorsService.getMonitor(id);
      setMonitor(data);
    }
  );

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchMonitor(params.id);
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
              <div>{monitor.id}</div>
              <div>{monitor.name}</div>
              <div>{monitor.price}</div>
              <div>{monitor.description}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Monitor;
