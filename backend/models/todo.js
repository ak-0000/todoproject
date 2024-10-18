const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  completed: {
    type: Boolean,
  },
});

const Todo = moongoose.model("Todo ", todoSchema);

module.exports = {
  Todo,
};
