const externalDbConnection = require("./MongoDatabaseConfig/mongodb");

const dbName         = "nodeTuts";
const collectionName = "tut_001";

// to reterive data from mongo db
const mainFunction = async () => {
  let data = await externalDbConnection(dbName, collectionName);
      data = await data.find().toArray();
  console.log(data);
};

mainFunction();
