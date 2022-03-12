const { Router } = require("express");
const videogame = require("./controllers/videogame");
const genre = require("./controllers/genres");
const videogames = require("./controllers/videogames");
const error404 = require("./controllers/404");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//prettier-ignore
router
    .route("/videogame")
    .get(videogame.get)
    .post(videogame.post);
//prettier-ignore
router
    .route("/genre")
    .get(genre.get);

//prettier-ignore
router
    .route("/videogames")
    .get(videogames.get);

//prettier-ignore
router
    .route("*")
    .get(error404.get);

module.exports = router;
