const mongoose = require("mongoose");
require("dotenv").config();

module.exports = function () {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connection successful"))
    .catch((error) => console.log(error));
};
