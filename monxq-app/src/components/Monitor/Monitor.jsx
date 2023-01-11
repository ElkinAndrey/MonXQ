import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import MonitorsService from "./../../API/MonitorsService";
import { useFetching } from "../../hooks/useFetching";
import Error from "./../Error/Error";
import Header from "../Header/Header";
import classes from "./Monitor.module.css";
import Characteristics from "./Characteristics/Characteristics";

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

  if (monitorError === "Request failed with status code 500") {
    return <Error />;
  }

  return (
    <div>
      <Header />
      <div className={classes.monitor}>
        <img
          src={`/img/${monitor._id}.png`}
          alt={""}
          className={classes.image}
        />
        <Characteristics
          monitor={monitor}
          monitorError={monitorError}
          isMonitorLoading={isMonitorLoading}
        />
      </div>
    </div>
  );
};

export default Monitor;
