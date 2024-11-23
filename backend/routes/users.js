const express = require("express");
const router = express.Router();
const ctrlPath = require("../controllers/users");
const multer = require("../config/multer")
//
// ROUTES
//
router.post("/signup",multer, ctrlPath.createUser);
router.post("/login", ctrlPath.loginUser);
router.get("/", ctrlPath.getAllUsers);
router.get("/:id", ctrlPath.getOneUser);
router.patch("/:id", ctrlPath.updateUser);
router.delete("/:id", ctrlPath.deleteUser);
//
// EXPORTS
//
module.exports = router;