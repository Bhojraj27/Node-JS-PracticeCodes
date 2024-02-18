const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirm_password: String,
  tc:Boolean
  
});
module.exports = mongoose.model("user",Schema);