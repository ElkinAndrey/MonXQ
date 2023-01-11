import React from "react";
import MonitorsHeader from "./MonitorsHeader/MonitorsHeader";
import Welcome from "./Welcome/Welcome";
import MonitorsList from "./MonitorsList/MonitorsList";

const Monitors = () => {
  return (
    <div>
      <div style={{ maxWidth: "3500px", margin: "0 auto" }}>
        <MonitorsHeader />
        <Welcome />
        <MonitorsList />
      </div>
    </div>
  );
};

export default Monitors;
