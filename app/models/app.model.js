const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  done: Boolean,
});

module.exports = mongoose.model("App", AppSchema);