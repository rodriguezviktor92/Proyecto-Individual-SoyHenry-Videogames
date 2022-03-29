import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./LeftBar.module.css";
import { sortByGenre } from "../../redux/actions";

function LeftBar() {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres);

  const handleSortByGenre = (event) => {
    const genre = event.target.value;
    console.log(event.target.value);
    dispatch(sortByGenre(genre));
  };

  return (
    <div className={css.sidebar}>
      <div className={css.genres}>
        <h2>Genres</h2>
        <ul>
          <li value="-1" onClick={(e) => handleSortByGenre(e)}>
            ALL
          </li>
          {genres ? (
            genres.map((genre) => (
              <li
                key={genre.id}
                value={genre.id}
                onClick={(e) => handleSortByGenre(e)}
              >
                <img src={genre.image_background} alt="" />
                <span>{genre.name}</span>
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
