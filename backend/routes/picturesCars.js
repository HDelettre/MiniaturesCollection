const express = require("express");
const multer = require("../config/multer.js");
const router = express.Router();
const ctrlPath = require("../controllers/picturesCars.js");
//
// ROUTES
//
router.post("/",multer, ctrlPath.addPictureCar);
router.get("/:id", ctrlPath.getAllPictureCars);
router.get("/one/:id", ctrlPath.getOnePictureCar);
router.patch("/:id",multer, ctrlPath.updatePictureCar);
router.delete("/:id", ctrlPath.deletePictureCar);
router.post("/image",multer, ctrlPath.addImage);
//
// EXPORTS
//
module.exports = router;