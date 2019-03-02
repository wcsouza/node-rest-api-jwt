const MovieModel = require("../models/movie");

MovieModel.methods(["get", "post", "put", "delete"]);
MovieModel.updateOptions({ new: true, runValidators: true });

module.exports = MovieModel;
