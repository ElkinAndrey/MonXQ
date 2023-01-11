import { React, useMemo, useState } from "react";
import MonitorsHeader from "./MonitorsHeader/MonitorsHeader";
import Welcome from "./Welcome/Welcome";
import MonitorsList from "./MonitorsList/MonitorsList";
import { useRef } from "react";
import { useEffect } from "react";
import MonitorsService from "./../../API/MonitorsService";
import { useFetching } from "./../../hooks/useFetching";

const search = (searchQuery, monitors) => {
  if (!searchQuery) {
    return monitors;
  }

  return [...monitors].filter((monitor) =>
    monitor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
};

const Monitors = () => {
  const dataFetchedRef = useRef(false);
  const [monitors, setMonitors] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");

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

  let searchedMonitors = useMemo(() => {
    return search(searchQuery, monitors);
  }, [searchQuery, monitors]);

  return (
    <div>
      <div style={{ maxWidth: "3500px", margin: "0 auto" }}>
        <MonitorsHeader />
        <Welcome />
        <MonitorsList
          monitors={searchedMonitors}
          isMonitorLoading={isMonitorLoading}
          monitorError={monitorError}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
    </div>
  );
};

export default Monitors;
