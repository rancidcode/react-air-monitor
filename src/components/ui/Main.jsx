import React from "react";

import LiveUpdates from "./LiveUpdates";
import RecentList from "./RecentList";
import Chart from "./Chart";

const Main = ({ data, dataset }) => {
  return (
    <div id="main">
      <div className="main-top">
        <LiveUpdates data={data} />
        <Chart dataset={dataset} />
      </div>
      <div className="main-bottom">
        <RecentList dataset={dataset} />
      </div>
    </div>
  );
};

export default Main;
