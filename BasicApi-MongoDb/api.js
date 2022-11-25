const expressJsVariable = require("express");
const dbConection    = require("../MongoDatabaseConfig/mongodb");
const dbName         = "nodeTuts";
const collectionName = "tut_001";
const newApp         = expressJsVariable();
const mongoDbObject  = require("mongodb");

newApp.use(expressJsVariable.json());

// get method for the api
async function getDbData() {
  let dataDbConnection = await dbConection(dbName, collectionName);
  return await dataDbConnection.find({}).toArray();
}
// get method for the api
newApp.get("/", async (req, resp) => {
  var getData = await getDbData();
  resp.send({ status: 200, data: getData });
});

/*
post api method or post api - used for inserting the data .We can use same url as for the post and get
*/
async function saveDbData(postManData) {
  let dataDbConnection = await dbConection(dbName, collectionName);
  return await dataDbConnection.insertMany(postManData);
}

newApp.post("/save-data", async (req, resp) => {
  var postDataBody = req.body;
  var saveData     = await saveDbData(postDataBody);
  resp.send({ status: 200, data: saveData });
});

/*
PUT method: for updting the data
*/

async function updateData(updateContent) {
  let dataDbConnection = await dbConection(dbName, collectionName);
  var firstElement     = updateContent.name;
  return await dataDbConnection.updateMany(
    {
      name: firstElement,
    },
    {
      $set: updateContent,
    }
  );
}

newApp.put("/update-data", async (req, resp) => {
  var postmanUpdateData = req.body;
  var updatedData       = await updateData(postmanUpdateData);
  resp.send({ status: 200, data: updatedData });
});

/* delete Data from mongo */

async function deleteData(deleteObjectId) {
  let dataDbConnection = await dbConection(dbName, collectionName);
  var db_id            = new mongoDbObject.ObjectId(deleteObjectId);
  var deleteStatus     = dataDbConnection.deleteOne({ _id: db_id });
  return deleteStatus;
}

newApp.delete("/delete-data/:id", async (req, resp) => {
  var deleteId    = req.params.id;
  var deletedData = await deleteData(deleteId);
  resp.send({ status: 200, data: deletedData });
});

newApp.listen(1994);
