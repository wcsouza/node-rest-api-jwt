const validateUser = require("../utils/validadeUser");

const movies = require("../routes/movie");
const users = require("../routes/user");
const author = require("../routes/author");

module.exports = function(server) {
  // public route
  server.get("/", function(req, res) {
    res.json({ tutorial: "Build REST API with node.js" });
  });

  server.get("/favicon.ico", function(req, res) {
    res.sendStatus(204);
  });
  
  server.use("/user", users);

  // private route
  server.use("/movie", validateUser, movies);
  server.use("/author", validateUser, author);
};
