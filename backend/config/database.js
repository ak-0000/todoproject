const mongoose = require("mongoose");

const connectdb = async () => {
  await mongoose.connect(
    "mongodb+srv://atul:5tHW7hQ3hpe!DP$@hellomongodb.rimbh.mongodb.net/todoApp"
  );
};

module.exports = { connectdb };
