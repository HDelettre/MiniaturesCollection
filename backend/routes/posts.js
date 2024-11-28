const express = require("express");
const router = express.Router();
const ctrlPath = require("../controllers/posts");
const ctrlPathPicture = require("../controllers/picturesCars");
const multer = require("../config/multer")
//
// ROUTES
//
router.post("/", ctrlPath.createPost);
router.get("/", ctrlPath.getAllPosts);
router.get("/:id", ctrlPath.getOnePost);
router.patch("/:id", ctrlPath.updatePost);
router.delete("/:id", ctrlPath.deletePost);
router.post("/image", multer, ctrlPath.addPostImage)
//
// EXPORTS
//
module.exports = router;