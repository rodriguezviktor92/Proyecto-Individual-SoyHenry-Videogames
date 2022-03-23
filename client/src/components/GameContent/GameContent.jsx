import React from "react";
import { connect } from "react-redux";
import GameCard from "../GameCard/GameCard";

function GameContent(props) {
  /* const videogames = [
    {
      id: "88ce0f7d-8b58-4748-b483-9eef72dff1c2",
      name: "tibia",
      description: "test",
      released: "1992-01-10",
      rating: "4.5",
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      genres: [
        {
          id: 10,
          name: "Strategy",
        },
        {
          id: 11,
          name: "Arcade",
        },
      ],
      platforms: [
        {
          id: 3,
          name: "iOS",
        },
        {
          id: 1,
          name: "Xbox One",
        },
      ],
    },
    {
      id: "3601d612-7c52-45b4-b93d-ae340f7916e2",
      name: "NFT",
      description: "test",
      released: "1992-01-10",
      rating: "4.5",
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      genres: [
        {
          id: 10,
          name: "Strategy",
        },
        {
          id: 11,
          name: "Arcade",
        },
      ],
      platforms: [
        {
          id: 3,
          name: "iOS",
        },
        {
          id: 1,
          name: "Xbox One",
        },
      ],
    },
    {
      id: "9dac2920-5337-4aa2-bf1c-b748a9183b6d",
      name: "Mario",
      description: "test",
      released: "1992-01-10",
      rating: "4.5",
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      genres: [
        {
          id: 10,
          name: "Strategy",
        },
        {
          id: 11,
          name: "Arcade",
        },
      ],
      platforms: [
        {
          id: 3,
          name: "iOS",
        },
        {
          id: 1,
          name: "Xbox One",
        },
      ],
    },
    {
      id: 3498,
      name: "Grand Theft Auto V",
      released: "2013-09-17",
      rating: 4.48,
      background_image:
        "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      genres: [
        {
          id: 4,
          name: "Action",
        },
        {
          id: 3,
          name: "Adventure",
        },
      ],
      platforms: [
        {
          id: 1,
          name: "Xbox One",
        },
        {
          id: 186,
          name: "Xbox Series S/X",
        },
        {
          id: 14,
          name: "Xbox 360",
        },
        {
          id: 16,
          name: "PlayStation 3",
        },
        {
          id: 18,
          name: "PlayStation 4",
        },
        {
          id: 187,
          name: "PlayStation 5",
        },
        {
          id: 4,
          name: "PC",
        },
      ],
    },
    {
      id: 3328,
      name: "The Witcher 3: Wild Hunt",
      released: "2015-05-18",
      rating: 4.67,
      background_image:
        "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
      genres: [
        {
          id: 4,
          name: "Action",
        },
        {
          id: 3,
          name: "Adventure",
        },
        {
          id: 5,
          name: "RPG",
        },
      ],
      platforms: [
        {
          id: 18,
          name: "PlayStation 4",
        },
        {
          id: 4,
          name: "PC",
        },
        {
          id: 1,
          name: "Xbox One",
        },
        {
          id: 186,
          name: "Xbox Series S/X",
        },
        {
          id: 187,
          name: "PlayStation 5",
        },
        {
          id: 7,
          name: "Nintendo Switch",
        },
      ],
    },
    {
      id: 4200,
      name: "Portal 2",
      released: "2011-04-18",
      rating: 4.62,
      background_image:
        "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
      genres: [
        {
          id: 2,
          name: "Shooter",
        },
        {
          id: 7,
          name: "Puzzle",
        },
      ],
      platforms: [
        {
          id: 14,
          name: "Xbox 360",
        },
        {
          id: 6,
          name: "Linux",
        },
        {
          id: 5,
          name: "macOS",
        },
        {
          id: 16,
          name: "PlayStation 3",
        },
        {
          id: 4,
          name: "PC",
        },
        {
          id: 1,
          name: "Xbox One",
        },
      ],
    },
  ]; */
  const { videogames } = props;
  return (
    <div className="content">
      {videogames.map((videogame) => (
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
  };
};

export default connect(mapStateToProps)(GameContent);
