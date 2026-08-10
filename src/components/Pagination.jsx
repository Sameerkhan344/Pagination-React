import React from 'react';

// FIX 1: Destructured 'setCurrentPage' from the props object
const Pagination = ({ currentPage, noOfPages, setCurrentPage }) => {
  
  const pageChangeHandler = (n) => {
    setCurrentPage(n);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage === 0}
        className="page-number"
        onClick={goToPrevPage} // Code cleanup: Passed function reference directly
      >
        ◀
      </button>
      
      {[...Array(noOfPages).keys()].map((n) => {
        return (
          <button
            key={n} // Visual & Optimization Fix: React requires a unique key for list items
            className={"page-number " + (n === currentPage ? "active" : "")}
            onClick={() => pageChangeHandler(n)}
          >
            <span>{n + 1}</span> {/* Visual Fix: Changes array index 0-9 to user-friendly page numbers 1-10 */}
          </button>
        );
      })}
      
      <button
        disabled={currentPage === noOfPages - 1}
        className="page-number"
        onClick={goToNextPage}
      >
        ▶
      </button>
    </div>
  );
};

// FIX 2: Added the missing default export required by App.jsx
export default Pagination;
