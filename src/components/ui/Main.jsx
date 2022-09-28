import React from "react";

import LiveUpdates from "./LiveUpdates";
import RecentList from "./RecentList";
import Chart from "./Chart";

const Main = ({ data }) => {
  return (
    <div id="main">
      <div className="main-top">
        <LiveUpdates data={data} />
        <Chart />
      </div>
      <div className="main-bottom">
        <RecentList />
      </div>
    </div>
  );
};

export default Main;
