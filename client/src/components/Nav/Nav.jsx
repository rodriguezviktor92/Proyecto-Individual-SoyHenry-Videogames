import React from "react";
import { Link } from "react-router-dom";
import css from "./Nav.module.css";

function Nav() {
  return (
    <header className={css.header}>
      <div className={css.content}>
        <div className={css.title}>
          <h1>VikGames</h1>
          <img
            src="https://cdn3.iconfinder.com/data/icons/in-action-line/64/gamepad_videogames_activities_holiday_hobby_leisure_free_time-512.png"
            alt=""
          ></img>
        </div>
        <nav>
          <ul className={css.list}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/videogame/create">Create Videogame</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
