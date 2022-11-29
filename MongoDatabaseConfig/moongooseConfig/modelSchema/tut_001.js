const moongooseObjectseObj = require("mongoose");
const proSchemas = new moongooseObjectseObj.Schema({
  name    : String,
  price   : Number,
  category: String,
  brand   : String,
});

const tutModel = moongooseObjectseObj.model("tut_001", proSchemas);

module.exports = tutModel;
