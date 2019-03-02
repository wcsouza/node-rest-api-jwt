const restful = require("node-restful");
const mongoose = restful.mongoose;

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = restful.model("Author", AuthorSchema);
