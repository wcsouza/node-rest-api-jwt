const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

UserModel.register = (req, res, next) => {
  UserModel.create(
    { name: req.body.name, email: req.body.email, password: req.body.password },
    function(err, result) {
      if (err) next(err);
      else
        res.json({
          status: "success",
          message: "User added successfully!!!",
          data: null
        });
    }
  );
};

UserModel.authenticate = (req, res, next) => {
  UserModel.findOne({ email: req.body.email }, function(err, userInfo) {
    if (err) {
      next(err);
    } else {
      if (
        userInfo != null &&
        bcrypt.compareSync(req.body.password, userInfo.password)
      ) {
        const token = jwt.sign({ id: userInfo._id }, req.app.get("secretKey"), {
          expiresIn: "1h"
        });

        res.json({
          status: "success",
          message: "user found!!!",
          data: { user: userInfo, token: token }
        });
      } else {
        res.json({
          status: "error",
          message: "Invalid email/password!!!",
          data: null
        });
      }
    }
  });
};

module.exports = UserModel;
