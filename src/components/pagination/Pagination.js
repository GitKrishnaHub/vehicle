import React, { useState } from 'react';
import './Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [page, setPage] = useState(currentPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
      onPageChange(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    goToPage(page - 1);
  };

  const goToNextPage = () => {
    goToPage(page + 1);
  };

  return (
    <div className="pagination">
    <span>Page {page} of {totalPages}</span>
    <div className="pagination-btn">

      <button
        onClick={goToPreviousPage}
        disabled={page === 1}
      >
        Previous
      </button>
      
      <button
        onClick={goToNextPage}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
    </div>
  );
};

export default Pagination;
