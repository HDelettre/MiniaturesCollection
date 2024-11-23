const express = require("express");
const router = express.Router();
const ctrlPath = require("../controllers/posts");
const multer = require("../config/multer")
//
// ROUTES
//
router.post("/",multer, ctrlPath.createPost);
router.get("/", ctrlPath.getAllPosts);
router.get("/:id", ctrlPath.getOnePost);
router.patch("/:id", ctrlPath.updatePost);
router.delete("/:id", ctrlPath.deletePost);
//
// EXPORTS
//
module.exports = router;