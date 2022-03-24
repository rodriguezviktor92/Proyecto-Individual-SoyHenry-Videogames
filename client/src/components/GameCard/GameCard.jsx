import React from "react";

function GameCard({ id, name, background_image }) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={background_image} alt="" width="100%" height="100%" />
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default GameCard;
