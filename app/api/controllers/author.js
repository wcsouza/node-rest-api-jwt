const AuthorModel = require("../models/author");

AuthorModel.methods(["get", "post", "put", "delete"]);
AuthorModel.updateOptions({ new: true, runValidators: true });

module.exports = AuthorModel;
