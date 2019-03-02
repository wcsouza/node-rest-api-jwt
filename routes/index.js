const validateUser = require("../utils/validadeUser");

const movies = require("../routes/movie");
const users = require("../routes/user");
const author = require("../routes/author");

module.exports = function(server) {
  // public route
  server.use("/user", users);

  // private route
  server.use("/movie", validateUser, movies);
  server.use("/author", validateUser, author);
};
