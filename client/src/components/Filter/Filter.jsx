import React, { useState } from "react";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  orderByName,
  orderByRating,
  searchGame,
  setLoading,
  sortBySource,
} from "../../redux/actions";

function Filter({ setOrder }) {
  const [search, setSearch] = useState("");
  const filterSource = useSelector((state) => state.filterSource);

  const dispatch = useDispatch();

  const handleSortBySource = (event) => {
    const source = event.target.value;
    dispatch(sortBySource(source));
  };

  const handleOrderByName = (event) => {
    const order = event.target.value;
    dispatch(orderByName(order));
    setOrder(`Ordenado ${event.target.value}`);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.value;
    setSearch(search);
  };

  const handleOrderByRating = (event) => {
    const order = event.target.value;
    dispatch(orderByRating(order));
    setOrder(`Ordenado ${event.target.value}`);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    dispatch(searchGame(search));
    dispatch(setLoading(true));
  };

  return (
    <div className={css.filter}>
      <div className={css.contentSearch}>
        <input
          type="text"
          placeholder="Search videoGame"
          name="search"
          id=""
          onChange={handleSearch}
          className={css.search}
        />
        <button
          type="submit"
          onClick={handleSearchSubmit}
          className={css.submit}
        >
          Search
        </button>
      </div>
      <div className={css.contentSelect}>
        <select
          name=""
          id=""
          onChange={handleSortBySource}
          className={css.selectSource}
          value={filterSource}
        >
          <option value="ALL">Filter By Source</option>
          <option value="ALL">All</option>
          <option value="DB">DataBase</option>
          <option value="API">API</option>
        </select>

        <select name="" id="" onChange={handleOrderByName}>
          <option value="ALL">Order alphabetically</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>

        <select name="" id="" onChange={handleOrderByRating}>
          <option value="ALL">Order By Rating</option>
          <option value="min">Min</option>
          <option value="max">Max</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
