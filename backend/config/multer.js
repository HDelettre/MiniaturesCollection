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
    } else  if (file.fieldname === "imageFile"){
      callback(null, "pictures/modelCarImage");
    }
  },

  filename: (req, file, callback) => {
    const fileExtension = MIME_TYPES[file.mimetype];
    let fileName = "";
    if (file.fieldname === "modelPicture") {
      fileName = req.body.modelCarsId + "_" + Date.now() + "." + fileExtension;
    } else if (file.fieldname === "userAvatar") {
      fileName = req.body.userId + fileExtension;
    } else   if (file.fieldname === "imageFile"){
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
  {name: "imageFile", maxCount:1},
]);
