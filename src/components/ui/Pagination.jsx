import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const [page, setPage] = React.useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div
            onClick={() => {
              paginate(number);
              setPage(number);
            }}
            key={number}
            className={page === number ? "page-item selected" : "page-item"}
          >
            {number}
          </div>
        ))}
      </div>
    </nav>
  );
};
export default Pagination;
