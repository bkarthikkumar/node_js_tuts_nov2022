//installed mongodb 
const {MongoClient} = require('mongodb');
// const mongoUrl           = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0';
const mongoUrl           = 'mongodb://127.0.0.1:27017/?appName=mongosh+1.6.0';
const connectMongoClient = new MongoClient(mongoUrl);

async function getData() {
    let results        = await connectMongoClient.connect();
    var dbName         = results.db('nodeTuts');
    var collectionName = dbName.collection('tut_001');
    let dbResult       = await collectionName.find({}).toArray()
    console.log(dbResult);

}

getData();