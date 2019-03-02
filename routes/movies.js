const express = require("express");
const router = express.Router();
const moviesController = require("../app/api/controllers/movies");

moviesController.register(router, "/");

module.exports = router;
