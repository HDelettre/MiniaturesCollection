const PICTURECARS = require("../models/picturesCars");

const fs = require("fs");

exports.addPictureCar = async (req, res) => {
  const newPicture = PICTURECARS.build(req.body);
  const pictureFile = JSON.parse(JSON.stringify(req.files.modelPicture))[0];
  console.log("picturefile :", pictureFile);
  newPicture["pictureName"] = pictureFile.filename;
  try {
    await newPicture.save();
    return res
      .status(201)
      .json({
        message: "La photo a été ajouté dans la base !",
        data: newPicture,
      });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "AddPictureCar : Le serveur est indisponible !",
        data: error,
      });
  }
};

exports.getAllPictureCars = async (req, res) => {
  try {
    const reponse = await PICTURECARS.findAll({
      where: { modelCarsId: parseInt(req.params.id) },
    });
    return res.status(200).json({message: "Les images sont chargées !", data :reponse});
  } catch (error) {
    return res.status(500).json({message: "Get All Picture : Erreur du serveur !", data: error});
  }
};

exports.getOnePictureCar = async (req, res) => {
  try {
    const reponse = await PICTURECARS.findOne({
      where: { modelCarsId: parseInt(req.params.id) },
    });
    if (!reponse) {
      return res.status(404).json({message: "Image inexistante !", data:""})
    }
    return res.status(200).json({message: "L'image est chargée !", data :reponse});
  } catch (error) {
    return res.status(500).json({message: "Get One Picture : Erreur du serveur !", data: error});
  }
};

exports.updatePictureCar = async (req, res) => {};

exports.deletePictureCar = async (req, res) => {};

exports.addImage = async (req, res) => {
    return res
      .status(201)
      .json({ message: "L'image a été sauvegardé !", data: "" });
};
