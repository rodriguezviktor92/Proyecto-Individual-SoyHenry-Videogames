require("dotenv").config();
const { API } = process.env;
const axios = require("axios");
const { Videogame, Genre, Platform } = require("../../db");
const { checkIfValidUUID, getIdName } = require("./utils");

module.exports = {
  async get(req, res) {
    const { idVideogame } = req.params;

    if (checkIfValidUUID(idVideogame)) {
      Videogame.findByPk(idVideogame, {
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
            through: { attributes: [] },
          },
          {
            model: Platform,
            attributes: ["id", "name"],
            through: { attributes: [] },
          },
        ],
      })
        .then((videogame) => res.send(videogame))
        .catch((err) => res.status(500).send(err));
    } else {
      try {
        const gameFromApi = await axios.get(
          `https://api.rawg.io/api/games/${idVideogame}?key=${API}`
        );

        const { id, name, description, released, background_image, rating } =
          gameFromApi.data;

        const genres = getIdName(gameFromApi.data.genres);
        const platforms = getIdName(gameFromApi.data.platforms, "platform");

        const videogameFromApi = {
          id,
          name,
          description,
          released,
          rating,
          background_image,
          genres,
          platforms,
        };
        res.json(videogameFromApi);
      } catch (err) {
        res.status(500).send(err.message);
      }
    }
  },
  async post(req, res) {
    //prettier-ignore
    const { name, description, released, rating, genres, background_image, platforms } = req.body;

    /* const countGenres = await Genre.findAndCountAll({
      where: { id: genres },
    });

    const countPlatforms = await Platform.findAndCountAll({
      where: { id: platforms },
    });
    if (
      countGenres.count < genres.length ||
      countPlatforms < platforms.length
    ) {
      res.send({
        succcess: false,
        err: "Alguno de los generos o plataformas enviados no fue encontrado",
      });
    } else {
      try {
        const videogame = await Videogame.create({
          name,
          description,
          releaseDate,
          rating,
          background_image,
        });
        const addgenres = videogame.addGenres(genres);
        const addplatforms = videogame.addPlatforms(platforms);
        if (videogame && addgenres && addplatforms) {
          res.status(201).json({ success: true });
        }
      } catch (error) {
        res.json({ success: false, err: error });
      }
    } */

    try {
      const checkGenrePlatform = await Promise.allSettled([
        Genre.findAndCountAll({ where: { id: genres } }).then(
          (result) => result.count
        ),
        Platform.findAndCountAll({ where: { id: platforms } }).then(
          (result) => result.count
        ),
      ]).then((values) => {
        const [{ value: countGenres }, { value: countPlatforms }] = values;
        //prettier-ignore
        const result = countGenres === genres.length && countPlatforms === platforms.length ? true : false;
        return result;
      });

      if (checkGenrePlatform) {
        /*       const videogame = await Videogame.create({
        name,
        description,
        releaseDate,
        rating,
        background_image,
      });

      Promise.allSettled([
        videogame.addGenres(genres),
        videogame.addPlatforms(platforms),
      ])
        .then((values) => {
          const [{ status: addgenres }, { status: addplatforms }] = values;
          //prettier-ignore
          const result = addgenres === "fulfilled" && addplatforms === "fulfilled" ? true : false;
          console.log(values);
          return result;
        })
        .then((result) => res.status(201).json({ success: result }))
        .catch((err) => {
          console.log(err);
        }); */

        Videogame.create({
          name,
          description,
          released,
          rating,
          background_image,
        })
          .then((videogame) =>
            Promise.allSettled([
              videogame.addGenres(genres),
              videogame.addPlatforms(platforms),
            ])
          )
          .then((values) => {
            const [{ status: addgenres }, { status: addplatforms }] = values;
            //prettier-ignore
            const result = addgenres === "fulfilled" && addplatforms === "fulfilled" ? true : false;
            return result;
          })
          .then((result) => res.status(201).json({ success: result }))
          .catch((err) => {
            res.status(500).send(err);
          });
      } else {
        res.send({
          succcess: false,
          err: "Alguno de los generos o plataformas enviados no fue encontrado",
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
