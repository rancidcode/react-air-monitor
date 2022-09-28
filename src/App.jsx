import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import Dashboard from "./components/pages/Dashboard";
import Table from "./components/pages/Table";

import "./styles.scss";

export const DataContext = React.createContext();

const App = () => {
  //   const [data, setData] = React.useState("");
  const [dataset, setDataset] = React.useState("");

  const dataHandler = async () => {
    const response = await axios.get("http://localhost:5000/read");
    // const count = response.data.length - 1;
    // setData(response.data[count]);
    setDataset(response.data);
  };

  React.useEffect(() => {
    const secTimer = setInterval(() => {
      dataHandler();
    }, 30 * 1000);
    return () => clearInterval(secTimer);
  });

  if (!dataset) return null;
  return (
    <DataContext.Provider value={dataset}>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/table" element={<Table />}></Route>
      </Routes>
    </DataContext.Provider>
  );
};

export default App;
