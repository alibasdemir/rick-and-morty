import PropTypes from "prop-types";
import "./pagination.css";
import { useState, useEffect } from "react";

function Pagination({
  currentPage,
  totalPages,
  paginate,
  nextPageUrl,
  prevPageUrl,
}) {
  const [visiblePages, setVisiblePages] = useState([]);
  const visiblePageCount = 5;

  useEffect(() => {
    const startPage = Math.max(
      1,
      currentPage - Math.floor(visiblePageCount / 2)
    );
    const endPage = Math.min(totalPages, startPage + visiblePageCount - 1);
    const pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
    setVisiblePages(pages);
  }, [currentPage, totalPages]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="paginationn">
        {prevPageUrl && (
          <li className="page-item">
            <button
              onClick={() => paginate(currentPage - 1)}
              className="page-link"
              aria-label="Previous"
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
        )}
        {visiblePages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            <button onClick={() => paginate(page)} className="page-link">
              {page}
            </button>
          </li>
        ))}
        {nextPageUrl && (
          <li className="page-item ">
            <button
              onClick={() => paginate(currentPage + 1)}
              className="page-link"
              aria-label="Next"
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
  nextPageUrl: PropTypes.string,
  prevPageUrl: PropTypes.string,
};

export default Pagination;
