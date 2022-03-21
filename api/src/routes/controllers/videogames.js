require("dotenv").config();
const { API } = process.env;
const axios = require("axios");
const { Videogame, Genre, Platform } = require("../../db.js");

module.exports = {
  async get(req, res) {
    let data = [];
    let videogames = [];
    let url = `https://api.rawg.io/api/games?key=${API}`;

    try {
      for (let i = 0; i < 5; i++) {
        const result = await axios.get(url);
        url = result.data.next;

        data.push(result.data.results);
      }

      data.flat().forEach((element) => {
        const videogame = {
          id: element.id,
          name: element.name,
          released: element.released,
          rating: element.rating,
          background_image: element.background_image,
          genres: element.genres.map((genre) => {
            return { id: genre.id, name: genre.name };
          }),
          platforms: element.platforms.map((platform) => {
            return { id: platform.platform.id, name: platform.platform.name };
          }),
        };
        videogames.push(videogame);
      });

      let videogamesFromDb = await Videogame.findAll({
        attributes: [
          "id",
          "name",
          "description",
          "released",
          "rating",
          "background_image",
        ],
        include: [
          {
            model: Genre,
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
          {
            model: Platform,
            attributes: ["id", "name"],
            through: {
              attributes: [],
            },
          },
        ],
      });

      if (videogames && videogamesFromDb) {
        const videogameTotal = videogames.concat(videogamesFromDb);

        if (req.query.name) {
          const search = videogameTotal.filter(
            (game) =>
              game.name.toLowerCase().includes(req.query.name.toLowerCase()) ===
              true
          );
          if (search.length > 0) {
            res.send(search.slice(0, 15));
          } else {
            res.status(204).send();
          }
        } else {
          res.send(videogameTotal);
        }
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
