const express = require("express");
const router = express.Router();
const ctrlPath = require("../controllers/modelsCars");
//
// ROUTES
//
router.post("/", ctrlPath.createModelCar);
router.get("/", ctrlPath.getAllModelCars);
router.get("/:id", ctrlPath.getOneModelCar);
router.patch("/:id", ctrlPath.updateModelCar);
router.delete("/:id", ctrlPath.deleteModelCar);
//
// EXPORTS
//
module.exports = router;