require("dotenv").config();
const { API } = process.env;
const axios = require("axios");
const { Op } = require("sequelize");
const { Videogame, Genre, Platform } = require("../../db.js");

module.exports = {
  async get(req, res) {
    let data = [];
    let videogames = [];
    let url = `https://api.rawg.io/api/games?key=${API}`;

    if (req.query.name) {
      const { name } = req.query;
      try {
        let videogamesFromDb = await Videogame.findAll({
          where: {
            name: {
              [Op.like]: req.query.name.toLowerCase(),
            },
          },
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

        const result = await axios.get(
          `https://api.rawg.io/api/games?search=${name.toLowerCase()}&key=${API}`
        );

        result.data.results.forEach((element) => {
          const videogame = {
            id: element.id,
            name: element.name,
            released: element.released,
            rating: element.rating,
            background_image: element.background_image,
            genres: element.genres
              ? element.genres.map((genre) => {
                  return { id: genre.id, name: genre.name };
                })
              : genres,
            platforms: element.platforms
              ? element.platforms.map((platform) => {
                  return {
                    id: platform.platform.id,
                    name: platform.platform.name,
                  };
                })
              : element.platforms,
          };
          videogames.push(videogame);
        });

        if (videogames && videogamesFromDb) {
          const videogameTotal = videogamesFromDb.concat(videogames);
          res.send(videogameTotal.slice(0, 15));
        }
      } catch (err) {
        res.status(500).send(`error: ${err}`);
      }
    } else {
      try {
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

        if (videogames && videogamesFromDb) {
          const videogameTotal = videogamesFromDb.concat(videogames);
          res.send(videogameTotal);
        }
      } catch (err) {
        res.status(500).send(err);
      }
    }
  },
};
