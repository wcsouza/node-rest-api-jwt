const restful = require("node-restful");
const mongoose = restful.mongoose;
const bcrypt = require("bcrypt");
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

UserSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = restful.model("User", UserSchema);
