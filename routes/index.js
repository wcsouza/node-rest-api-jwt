const validateUser = require("../utils/validadeUser");

const movie = require("../routes/movie");
const user = require("../routes/user");
const author = require("../routes/author");

module.exports = function(server) {
  // public route
  server.get("/", function(req, res) {
    res.json({ tutorial: "Build REST API with node.js" });
  });

  server.get("/favicon.ico", function(req, res) {
    res.sendStatus(204);
  });

  server.use("/user", user);

  // private route
  server.use("/movie", validateUser, movie);
  server.use("/author", validateUser, author);
};
