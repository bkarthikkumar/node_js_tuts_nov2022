const moongooseObject = require("mongoose");
const mongoUrl = "mongodb://127.0.0.1:27017/nodeTuts?appName=mongosh+1.6.0";

moongooseObject.connect(mongoUrl);
//  schema is for the validation part like restricitng number of fields and all type
const proSchema = new moongooseObject.Schema({
  name    : String,
  price   : Number,
  category: String,
  brand   : String,
});

const saveInDB = async () => {
  //   models --> use to connect node js and mongo db with help of schemas

  const proModels = moongooseObject.model("tut_001", proSchema);

  let insertData = new proModels({
    name    : "moogoose brand",
    brand   : "Moongse File",
    price   : 2584,
    category: "Mongoogse Cat",
  });
  let result = await insertData.save();

  console.log(result);
};

const updateInDb = async () => {
  const proModels = moongooseObject.model("tut_001", proSchema);
  let   Data      = await proModels.updateOne(
    {
      name: "moogoose brand",
    },
    {
      $set: { price: 209411 },
    }
  );
};
// updateInDb();

const deleteDatainDb = async () => {
  const proModels = moongooseObject.model("tut_001", proSchema);
  let   delData   = await proModels.deleteOne({
    name: "moogoose brand",
  });
  console.log(delData);
};

const findDatainDb = async () => {
  const proModels = moongooseObject.model("tut_001", proSchema);
  let   findData  = await proModels.find();
  console.log(findData);
};

findDatainDb();
// deleteDatainDb();
// main();
