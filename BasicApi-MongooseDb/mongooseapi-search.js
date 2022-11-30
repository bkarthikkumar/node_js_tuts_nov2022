const expressObj = require("express");

require("../MongoDatabaseConfig/moongooseConfig/mongoose-config");

const productModelSchema = require("../MongoDatabaseConfig/moongooseConfig/modelSchema/tut_001");

const newAppApi = expressObj();

newAppApi.use(expressObj.json());

newAppApi.get("/search/:_s", async (req, resp) => {
  console.log(req.params);
  let searchData = req.params._s;
  let data       = await productModelSchema.find({
    $or: [
      {
        name: { $regex: searchData },
      },
      {
        brand: { $regex: searchData },
      },
      {
        category: { $regex: searchData },
      },
    ],
  });
  resp.send({
    status: 200,
    data  : data,
  });
});

newAppApi.listen(2003);
