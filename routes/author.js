const express = require("express");
const router = express.Router();
const authorController = require("../app/api/controllers/author");

authorController.register(router, "/");
router.post("/teste", authorController.Teste);

module.exports = router;
