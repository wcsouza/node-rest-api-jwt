const AuthorModel = require("../models/author");

AuthorModel.methods(["get", "post", "put", "delete"]);
AuthorModel.updateOptions({ new: true, runValidators: true });

// AuthorModel.before("post", set_user_id).before("put", set_user_id);

// function set_user_id(req, res, next) {
//   console.log("begore:", req);
//   //req.body.password = hash(req.body.password);
//   next();
// }

AuthorModel.CountUser = (req, res, next) => {
  AuthorModel.count({ user_id: req.body.user_id }, (error, value) => {
    if (error) {
      next(error);
    } else {
      res.json({
        status: "success",
        message: "Count",
        data: value
      });
    }
  });
};

AuthorModel.Teste = (req, res, next) => {
  AuthorModel.count((error, value) => {
    if (error) {
      next(error);
    } else {
      res.json({
        status: "success",
        message: "Count",
        data: value
      });
    }
  });
};

module.exports = AuthorModel;
