const router = require("express").Router();
const videogame = require("./videogame");
const videogames = require("./videogames");
const genres = require("./genres");
const error404 = require("./controllers/404");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogame", videogame);
router.use("/videogames", videogames);
router.use("/genres", genres);

//prettier-ignore
router
    .route("*")
    .get(error404.get);

module.exports = router;
