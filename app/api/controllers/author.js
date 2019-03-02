const Author = require("../models/author");

Author.methods(["get", "post", "put", "delete"]);
Author.updateOptions({ new: true, runValidators: true });

module.exports = Author;
