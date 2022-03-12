module.exports = {
  get(req, res) {
    res.send("GET videogame");
  },
  post(req, res) {
    console.log(req.body);
    res.send("POST videogame");
  },
};
