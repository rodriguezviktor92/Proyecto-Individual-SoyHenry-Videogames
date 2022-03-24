import React from "react";
import { connect } from "react-redux";
import GameCard from "../GameCard/GameCard";
import Pagination from "../Pagination/Pagination";

function GameContent(props) {
  const { videogames, filtergames, currentPage, videogamesPerPage } = props;

  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  let currentVideogames = filtergames.length !== 0 ? filtergames : videogames;
  currentVideogames = currentVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  return (
    <div className="content">
      <Pagination
        videogamesPerPage={videogamesPerPage}
        totalVideogame={videogames.length}
        currentPage={currentPage}
      />
      {currentVideogames.map((videogame) => (
        <GameCard
          key={videogame.id}
          id={videogame.id}
          name={videogame.name}
          background_image={videogame.background_image}
        />
      ))}
    </div>
  );
}
export const mapStateToProps = (state) => {
  return {
    videogames: state.videogames,
    filtergames: state.filtergames,
    currentPage: state.currentPage,
    videogamesPerPage: state.videogamesPerPage,
  };
};

export default connect(mapStateToProps)(GameContent);
