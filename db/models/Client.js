var { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
  id: String,
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
});

const Client = model("client", ClientSchema);

module.exports = Client;
