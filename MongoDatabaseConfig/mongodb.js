//installed mongodb
const { MongoClient } = require("mongodb");
// const mongoDatabaseName  = "nodeTuts";
const mongoUrl           = "mongodb://127.0.0.1:27017/?appName=mongosh+1.6.0";
const connectMongoClient = new MongoClient(mongoUrl);

async function dbConection(mongoDatabaseName, dbCollectionName) {
  let results = await connectMongoClient.connect();
  var dbName  = results.db(mongoDatabaseName);
  return dbName.collection(dbCollectionName);
}

module.exports = dbConection;
