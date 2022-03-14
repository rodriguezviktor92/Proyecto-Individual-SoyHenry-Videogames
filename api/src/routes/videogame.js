const router = require("express").Router();
const videogame = require("./controllers/videogame");

//prettier-ignore
router
    .route("/")
    .get(videogame.get)
//prettier-ignore
router
    .route("/:idVideogame")
    .post(videogame.post)

module.exports = router;
