const router = require("express").Router();
const videogame = require("./controllers/videogame");

//prettier-ignore
router
    .route("/:idVideogame")
    .get(videogame.get)
//prettier-ignore
router
    .route("/")
    .post(videogame.post)

module.exports = router;
