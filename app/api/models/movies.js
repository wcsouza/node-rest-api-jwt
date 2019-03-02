const restful = require("node-restful");
const mongoose = restful.mongoose;

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  released_on: {
    type: Date,
    trim: true,
    required: true
  }
});

module.exports = restful.model("Movies", MovieSchema);