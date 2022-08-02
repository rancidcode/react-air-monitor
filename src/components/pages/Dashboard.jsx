import React from "react";

import Navbar from "../ui/Navbar";
import Main from "../ui/Main";

const Dashboard = ({ data, dataset }) => {
  return (
    <div id="whole-page">
      <Navbar id="dashboard" />
      <Main data={data} dataset={dataset} />
    </div>
  );
};

export default Dashboard;
