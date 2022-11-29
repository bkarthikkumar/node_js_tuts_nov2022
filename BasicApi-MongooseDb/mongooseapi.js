const expressObj = require("express");

require("../MongoDatabaseConfig/moongooseConfig/mongoose-config");

const productModelSchema = require("../MongoDatabaseConfig/moongooseConfig/modelSchema/tut_001");

const newAppApi = expressObj();

newAppApi.use(expressObj.json());

newAppApi.post("/create", async (req, resp) => {
  console.log(req.body);
  let insertData = new productModelSchema(req.body);
  let result     = await insertData.save();
  resp.send({
    status: 200,
    data  : [req.body],
    result: result,
  });
});

newAppApi.get("/list", async (req, resp) => {
  let allData = await productModelSchema.find();
  resp.send({
    status: 200,
    data  : allData,
  });
});

newAppApi.delete("/delete/:_id", async (req, resp) => {
  //   resp.send(req.params);
  let delDataData = await productModelSchema.deleteOne(req.params);
  resp.send({
    status: 200,
    data  : delDataData,
  });
});

newAppApi.put("/update/:_id", async (req, resp) => {
  var updateID   = req.params;
  let updateData = await productModelSchema.updateOne(
    { updateID },
    {
      $set: req.body,
    }
  );
  resp.send({
    status: 200,
    data  : updateData,
  });
});

newAppApi.listen(2003);
