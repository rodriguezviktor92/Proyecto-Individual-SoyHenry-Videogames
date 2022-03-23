import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <header className="header">
      <div>
        <h1>VikGames</h1>
      </div>
      <div>
        <input type="text" />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <Link to="/">Home</Link>
            <Link to="/videogame/create">Create Videogame</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
