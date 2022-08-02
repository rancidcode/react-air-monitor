import React from "react";

import Chart from "../ui/Chart";
import Navbar from "../ui/Navbar";

const ChartReport = ({ dataset }) => {
  return (
    <div id="whole-page">
      <Navbar id="chart" />
      <Chart dataset={dataset} />
    </div>
  );
};

export default ChartReport;
