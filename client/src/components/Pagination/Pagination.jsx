import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/actions";

function Pagination({ videogamesPerPage, totalVideogame, currentPage }) {
  const dispatch = useDispatch();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalVideogame / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    dispatch(setCurrentPage(number));
  };

  return (
    <nav>
      <ul>
        <li className={currentPage === 1 ? "disabled" : ""}>
          <span onClick={() => handleClick(currentPage - 1)}>Prev</span>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? "current-page" : "page"}
          >
            <span onClick={() => handleClick(number)}>{number}</span>
          </li>
        ))}

        <li className={pageNumbers.length === currentPage ? "disabled" : ""}>
          <span onClick={() => handleClick(currentPage + 1)}>Next</span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
