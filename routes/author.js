const express = require("express");
const router = express.Router();
const authorController = require("../app/api/controllers/author");

// authorController.route("/recommend", function(req, res, next) {
//   res.send("I have a recommendation for you!");
// });

authorController.register(router, "/");
router.post("/teste", authorController.Teste);
router.post("/count", authorController.CountUser);

module.exports = router;
