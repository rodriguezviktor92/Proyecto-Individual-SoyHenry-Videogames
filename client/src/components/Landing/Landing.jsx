import React from "react";
import { Link } from "react-router-dom";
import css from "./Landing.module.css";

function Landing() {
  return (
    <div className={css.content}>
      <div>
        <img src="https://i.ibb.co/fFKyX4X/image-1.png" alt="" />
      </div>
      <div>
        <h1>The Best Video Game Discovery WebSite</h1>
        <Link to="/home" className={css.button}>
          Enter Now
        </Link>
      </div>
    </div>
  );
}

export default Landing;
