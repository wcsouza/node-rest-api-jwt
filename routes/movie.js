const express = require("express");
const router = express.Router();
const moviesController = require("../app/api/controllers/movie");

moviesController.register(router, "/");

module.exports = router;
