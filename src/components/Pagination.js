import React from "react";
import PropTypes from "prop-types";


const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  Pagination.propTypes = {
    startPage: PropTypes.number,
    lastPage: PropTypes.number
  };


  let prevVal;
  let nextVal;
  let lastPage;
  let endIndex = totalPages;
  //let startIndex = 1;
  let startPage = 1;

  if (totalPages <= 10) {
    // less than 10 total pages so show all
    startPage = 1;
    lastPage = totalPages;
  } else {
    // more than 10 total pages so calculate start and end pages
    if (currentPage <= 6) {
      startPage = 1;
      lastPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      lastPage = totalPages;
    } else {
      startPage = currentPage - 5;
      //need to force rentPage to number here. to do Implement better typing
      lastPage = Number(currentPage) + 4;
    }

    prevVal = startPage - 1;
    nextVal = lastPage + 1;
  }

  // create an array of pages to ng-repeat in the pager control
  var pages = [...Array(lastPage + 1 - startPage).keys()].map(
    i => startPage + i
  );

  const updateCurrentPage = e => {
    e.preventDefault();
    const page = e.target.value;

    if (page !== currentPage) {
      setCurrentPage(page);
    }
    return;
  };

  return (
    <ul className="flex flex-wrap list-reset border border-grey-light rounded max-w-auto font-sans">
      <li>
        <button
          className="block hover:text-gray-500 hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          value="1"
          onClick={updateCurrentPage}
        >
          First
        </button>
      </li>

      <li>
        <button
          className="block hover:text-gray-500 hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          value={prevVal}
          onClick={updateCurrentPage}
        >
           &#xab;
           
        </button>
      </li>

      {pages.map((page, index) => (
        <li  key={index}>
        <button
          className={
            currentPage === page
              ? "block text-gray-500 bg-blue border-r border-blue px-3 py-2"
              : "block hover:text-gray-500 hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          }
          value={page}
          onClick={updateCurrentPage}
        >
          {page}
        </button>
        </li>
      ))}

      <li>
        <button
          className="block hover:text-gray-500 hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          value={nextVal}
          onClick={updateCurrentPage}
        >
          &#xbb;
        </button>
      </li>
      <li>
        <button
          className="block hover:text-gray-500 hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
          value={endIndex}
          onClick={updateCurrentPage}
        >
          Last
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
