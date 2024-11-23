const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const maximumPictureSize = 5000000;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.fieldname === "modelPicture") {
      callback(null, "pictures/modelCars");
    } else if (file.fieldname === "userAvatar") {
      callback(null, "pictures/users");
    } else if (file.fieldname === "imageFile") {
      callback(null, "pictures/modelCarImage");
    } else if (file.fieldname === "driverFile") {
      callback(null, "pictures/drivers");
    } else if (file.fieldname === "logoFile") {
      callback(null, "pictures/logos");
    }
  },

  filename: (req, file, callback) => {
    const fileExtension = MIME_TYPES[file.mimetype];
    let fileName = "";
    if (file.fieldname === "modelPicture") {
      fileName = req.body.modelCarsId + "_" + Date.now() + "." + fileExtension;
    } else if (file.fieldname === "userAvatar") {
      fileName = req.body.pseudo + "_" +Date.now() + fileExtension;
    } else if (file.fieldname === "imageFile") {
      fileName = req.body.imageName;
    } else if (file.fieldname === "driverFile") {
      fileName = req.body.imageName;
    } else if (file.fieldname === "logoFile") {
      fileName = req.body.imageName;
    }
    callback(null, fileName);
  },
});

const fileChecking = function (req, file, callback) {
  const fileExtension = MIME_TYPES[file.mimetype];
  if (fileExtension === undefined) {
    return callback(null, false, new Error("Extension non acceptée !"));
  }
  callback(null, true);
};

module.exports = multer({
  storage: storage,
  fileFilter: fileChecking,
  limits: { fileSize: maximumPictureSize },
}).fields([
  { name: "modelPicture", maxCount: 1 },
  { name: "userAvatar", maxCount: 1 },
  { name: "imageFile", maxCount: 1 },
  { name: "driverFile", maxCount: 1 },
  { name: "logoFile", maxCount: 1 },
]);
