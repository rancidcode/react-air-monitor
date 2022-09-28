import React from "react";

import Navbar from "../ui/Navbar";
import Pagination from "../ui/Pagination";

import { DataContext } from "../../App";

const Table = () => {
  const dataset = React.useContext(DataContext);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataset.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="whole-page">
      <Navbar id="table" />
      <div className="table">
        <h3>Air Monitor Incoming Data</h3>
        <table>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Heat Index (C)</th>
              <th>Air Quality (ppm)</th>
              <th>Dust Density (ug/m3)</th>
            </tr>
          </tbody>
          {currentPosts.map((data) => (
            <tbody key={data._id}>
              <tr>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.heatIndex}</td>
                <td>{data.airQuality}</td>
                <td>{data.dustDensity}</td>
              </tr>
            </tbody>
          ))}
        </table>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={dataset.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Table;
