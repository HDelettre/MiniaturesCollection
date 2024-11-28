const POSTS = require("../models/posts")

exports.createPost = async (req, res) => {
  const newPost = POSTS.build(req.body);
  if (req.files) {
    const pictureFile = JSON.parse(JSON.stringify(req.files.postImageFile))[0];
    newPost["pictureName"] = pictureFile.filename;
  }
  try {
    await newPost.save();
    return res.status(201).json({
      message: "Le message a été ajouté dans la base !",
      data: newPost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "CreatePost : Le serveur est indisponible !",
      data: error,
    });
  }
}

exports.getAllPosts = async  (req, res) => {
  try {
    const response = await POSTS.findAll({
      order: [["createdAt", "DESC"]]
    });
    if (!response) {
      return res
        .status(404)
        .json({ message: "Aucune donnée n'a été trouvée !", data: "" });
    }
    return res
      .status(200)
      .json({ message: "Les données ont été récupérées ! ", data: response });
  } catch (error) {
    return res.status(500).json({
      message: "GetAllPosts : Le serveur est indisponible !",
      data: error,
    });
  }
}

exports.getOnePost = async (req, res) => {
  try {
    const response = await POSTS.findOne({
      where: { postId: req.params.id },
    });
    if (!response) {
      return res
        .status(404)
        .json({ message: "Aucune donnée n'a été trouvée !", data: "" });
    }
    return res
      .status(200)
      .json({ message: "Les données ont été récupérées ! ", data: response });
  } catch (error) {
    return res.status(500).json({
      message: "GetOnePost : Le serveur est indisponible !",
      data: error,
    });
  }
}

exports.updatePost = async (req, res) => {
  try {
    await POSTS.update(req.body, {
      where: { postId: req.params.id },
    });
    return res
      .status(200)
      .json({ message: "Le message a été modifié avec succès :)", data: "" });
  } catch (error) {
    return res.status(500).json({
      message: "UpdatePost : Erreur lors de la modification du message !",
      data: error,
    });
  }
}

exports.deletePost = async (req, res) => {
  if (body) {
    const deleteFiles = req.body;
    const pathFile =
    "C:/Users/rv/Documents/OPENCLASSROOM/PROJETS_WEB/CollectionF1/backend/pictures/posts/";
    
    function deletePicture(files) {
      for (const file of files) {
        fs.unlink(pathFile + file, (err) => {
          if (err) throw err;
        });
      }
    }
    deletePicture(deleteFiles);
  }
  try {
    await POSTS.destroy({
      where: { postId: req.params.id },
    });
    return res.status(200).json({
      message: "Le message a été supprimé avec succès :)",
      data: "",
    });
  } catch (error) {
    return res.status(500).json({
      message: "DeletePost : Erreur lors de la suppression du modèle !",
      data: error,
    });
  }
}

exports.addPostImage = async (req, res) => {
  const pictureFile = JSON.parse(JSON.stringify(req.files.postImageFile))[0];
  return res
    .status(201)
    .json({ message: "L'image a été sauvegardé !", data: pictureFile.filename });
};
