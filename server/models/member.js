const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
