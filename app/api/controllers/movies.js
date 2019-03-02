const Movies = require("../models/movies");

Movies.methods(["get", "post", "put", "delete"]);
Movies.updateOptions({ new: true, runValidators: true });

module.exports = Movies;
