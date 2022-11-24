//installed mongodb
const { MongoClient }   = require("mongodb");
const mongoDatabaseName = "nodeTuts";
// const mongoUrl           = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
const mongoUrl           = "mongodb://127.0.0.1:27017/?appName=mongosh+1.6.0";
const connectMongoClient = new MongoClient(mongoUrl);

async function dbConection(dbCollectionName) {
  let results = await connectMongoClient.connect();
  var dbName  = results.db(mongoDatabaseName);
  return dbName.collection(dbCollectionName);
}
// async function getData() {
//     let results        = await connectMongoClient.connect();
//     var dbName         = results.db(mongoDatabaseName);
//     var collectionName = dbName.collection('tut_001');
//     let dbResult       = await collectionName.find({}).toArray()
//     console.log(dbResult);
// }

// getData();

// now handling promise of mongodb
// dbConection("tut_001").then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((newResp) => {
//       console.log(newResp);
//     });
// });

// console.log(dbConection('tut_001'));

const mainFunction = async () => {
  let data = await dbConection("tut_001");
      data = await data.find().toArray();
  console.log(data);
};

mainFunction();
