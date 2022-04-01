const router = require("express").Router();
const videogame = require("./controllers/videogame");

//prettier-ignore
router
    .route("/:idVideogame")
    .get(videogame.get)
    .delete(videogame.delete)
//prettier-ignore
router
    .route("/")
    .post(videogame.post)

module.exports = router;
