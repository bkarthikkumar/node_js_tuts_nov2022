const externalDbConnection = require("./MongoDatabaseConfig/mongodb");
const dbName         = "nodeTuts";
const collectionName = "tut_001";
//  for delete the data in monogdb

const deleteData = async () => {
  console.log("delete start");
  let removeData = await externalDbConnection(dbName, collectionName);
  var result     = await removeData.deleteMany({ name: "newFileName-01" });
  //   console.log(removeData);
  if (result.acknowledged && result.deletedCount != 0) {
    console.log(result);
    console.log(result.deletedCount + " Data Deleted");
  }
  console.log("delete END");
};

deleteData();
