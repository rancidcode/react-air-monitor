import React from "react";

import { DataContext } from "../../App";

const RecentList = () => {
  const dataset = React.useContext(DataContext);

  return (
    <>
      <h3>Recent Incoming Data</h3>
      <div className="outer-container">
        <div className="parameter-box">
          <p>Heat Index</p>
        </div>

        <p>{dataset[dataset.length - 1].heatIndex < 39.5 ? "OK" : "Bad"}</p>
        <p>
          {dataset[dataset.length - 1].date} {dataset[dataset.length - 1].time}
        </p>
      </div>
      <div className="outer-container">
        <div className="parameter-box">
          <p>Air Quality</p>
        </div>
        <p>{dataset[dataset.length - 1].airQuality < 150 ? "Good" : "Bad"}</p>
        <p>
          {dataset[dataset.length - 1].date} {dataset[dataset.length - 1].time}
        </p>
      </div>
      <div className="outer-container">
        <div className="parameter-box">
          <p>Dust Density</p>
        </div>
        <p>{dataset[dataset.length - 1].dustDensity < 65 ? "Good" : "Bad"}</p>
        <p>
          {dataset[dataset.length - 1].date} {dataset[dataset.length - 1].time}
        </p>
      </div>
    </>
  );
};

export default RecentList;
