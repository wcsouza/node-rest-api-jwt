const AuthorModel = require("../models/author");

AuthorModel.methods(["get", "post", "put", "delete"]);
AuthorModel.updateOptions({ new: true, runValidators: true });

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
