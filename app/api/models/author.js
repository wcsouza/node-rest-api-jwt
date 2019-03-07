const restful = require("node-restful");
const mongoose = restful.mongoose;

const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user_id: { type: String, required: false }
});

// AuthorSchema.pre("save", function(next) {
//   console.log("aqui", this);
//   this.user_id = "id teste fixo";
//   next();
// });

module.exports = restful.model("Author", AuthorSchema);
