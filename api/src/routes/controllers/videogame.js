const { Videogame, Genre, Platform } = require("../../db");
const { Op } = require("sequelize");

module.exports = {
  get(req, res) {
    const { idVideogame } = req.params;
    res.send("GET videogame: " + idVideogame);
  },
  async post(req, res) {
    //prettier-ignore
    const { name, description, releaseDate, rating, genres, background_image, platforms } = req.body;

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
          releaseDate,
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
