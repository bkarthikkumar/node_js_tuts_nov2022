const expressObj = require("express");
const multerObj    = require("multer");
const newMulterApi = expressObj();

const saveFile = multerObj({
  storage: multerObj.diskStorage({
    destination: function (req, file, callBack) {
      console.log(file.originalname.slice(-3));
      callBack(null, "multerUpload");
    },
    filename: function (req, file, callBack) {
      console.log(file);
      callBack(null, file.fieldname + "_" + Date.now() + ".jpg");
    },
  }),
}).single("userFile");

newMulterApi.post("/upload", saveFile, (req, resp) => {
  resp.send("AA File upload");
});

newMulterApi.listen(1994);
