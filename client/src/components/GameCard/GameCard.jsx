import React from "react";
import { Link } from "react-router-dom";
import css from "./GameCard.module.css";

function GameCard({ id, name, background_image, genres }) {
  return (
    <div className={css.card}>
      <div className={css.cardImg}>
        <img src={background_image} alt="" width="100%" height="100%" />
      </div>
      <div className={css.content}>
        <div className={css.title}>
          <Link to={`/videogame/${id}`}>{name}</Link>
        </div>
        <div className={css.genres}>
          <div className={css.genresTitle}>Genres:</div>
          <div>
            {genres
              ? genres.map((genre) => (
                  <span key={genre.id}>{genre.name}, </span>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
