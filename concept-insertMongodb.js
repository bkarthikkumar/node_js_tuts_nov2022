const externalDbConnection = require("./MongoDatabaseConfig/mongodb");
const dbName         = "nodeTuts";
const collectionName = "tut_001";
// for inserting data

const insertFunction = async () => {
  const db         = await externalDbConnection(dbName, collectionName);
  const insertData = await db.insertMany([
    {
      name    : "file-001",
      brand   : "form File",
      price   : 358.2,
      category: "From File code",
    },
    {
      name    : "file-002",
      brand   : "form File",
      price   : 3485,
      category: "From File code",
    },
    {
      name    : "file-003",
      brand   : "form File",
      price   : 100,
      category: "From File code",
    },
  ]);

  if (insertData.acknowledged) {
    console.log("DATA inserted succesfully ");
    console.log(insertData.insertedCount + " Data inserted into MOngoDb");
  }
  //   console.log(insertData);
  //   console.log("insert function");
};
insertFunction();
