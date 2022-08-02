import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Dashboard from "./components/pages/Dashboard";
import Table from "./components/pages/Table";
import ChartReport from "./components/pages/ChartReport";

import "./styles.scss";

const App = () => {
  const [data, setData] = React.useState("");
  const [dataset, setDataset] = React.useState("");

  const dataHandler = async () => {
    const response = await axios.get("http://localhost:5000/read");
    const count = response.data.length - 1;
    setData(response.data[count]);
    setDataset(response.data);
  };

  React.useEffect(() => {
    // const secTimer = setInterval(() => {
    //   dataHandler();
    // }, 1000);
    // return () => clearInterval(secTimer);
    dataHandler();
  }, []);

  if (!dataset) return null;
  return (
    <Routes>
      <Route
        path="/"
        element={<Dashboard data={data} dataset={dataset} />}
      ></Route>
      <Route path="/table" element={<Table dataset={dataset} />}></Route>
      <Route path="/chart" element={<ChartReport dataset={dataset} />}></Route>
    </Routes>
  );
};

export default App;
