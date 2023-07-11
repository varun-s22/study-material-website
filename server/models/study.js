const mongoose = require("mongoose");
const schema = mongoose.Schema;

const studySchema = new schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  grade: {
    type: String,
  },
  description: {
    type: String,
  },
  attachment_url: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Study = mongoose.model("Study", studySchema);

module.exports = Study;
