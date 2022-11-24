const externalDbConnection = require("./MongoDatabaseConfig/mongodb");
const dbName         = "nodeTuts";
const collectionName = "tut_001";
//  for updating the data in monogdb

const updateData = async () => {
  let dbConectionData = await externalDbConnection(dbName, collectionName);
  let updatingData    = await dbConectionData.updateMany(
    { name: "file-001" }, //update conditions
    {
      $set: { name: "newFileName-01", price: 857 },
    }
  );
  console.log(updatingData);
};

updateData();
