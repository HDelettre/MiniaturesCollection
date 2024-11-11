const express = require("express");
const multer = require("../config/multer.js");
const router = express.Router();
const ctrlPath = require("../controllers/picturesCars.js");
//
// ROUTES
//
router.post("/",multer, ctrlPath.addPictureCar);
router.get("/", ctrlPath.getAllPictureCars);
router.get("/:id", ctrlPath.getOnePictureCar);
router.patch("/:id",multer, ctrlPath.updatePictureCar);
router.delete("/:id", ctrlPath.deletePictureCar);
//
// EXPORTS
//
module.exports = router;