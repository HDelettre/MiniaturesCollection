const MODELCARS = require("../models/modelsCars");
const fs = require("fs");

exports.createModelCar = async (req, res) => {
  const newModelCars = MODELCARS.build(req.body);
  try {
    await newModelCars.save();
    return res.status(201).json({
      message: "Le modèle a été ajouté dans la base !",
      data: newModelCars,
    });
  } catch (error) {
    return res.status(500).json({
      message: "CreateModelCar : Le serveur est indisponible !",
      data: error,
    });
  }
};

exports.getAllModelCars = async (req, res) => {
  try {
    const response = await MODELCARS.findAll({
      order: [["createdAt", "ASC"]]
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
      message: "GetAllModelCars : Le serveur est indisponible !",
      data: error,
    });
  }
};

exports.getOneModelCar = async (req, res) => {
  try {
    const response = await MODELCARS.findOne({
      where: { modelCarsId: req.params.id },
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
      message: "GetOneModelCar : Le serveur est indisponible !",
      data: error,
    });
  }
};

exports.updateModelCar = async (req, res) => {
  try {
    await MODELCARS.update(req.body, {
      where: { modelCarsId: req.params.id },
    });
    return res
      .status(200)
      .json({ message: "Le modèle a été modifié avec succès :)", data: "" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la modification du modèle !",
      data: error,
    });
  }
};

exports.deleteModelCar = async (req, res) => {
  const deleteFiles = req.body;
  const pathFile =
    "C:/Users/rv/Documents/OPENCLASSROOM/PROJETS_WEB/CollectionF1/backend/pictures/modelCars/";

  function deletePicture(files) {
    for (const file of files) {
      fs.unlink(pathFile + file, (err) => {
        if (err) throw err;
      });
    }
  }
  deletePicture(deleteFiles);
  try {
    await MODELCARS.destroy({
      where: { modelCarsId: req.params.id },
    });
    return res.status(200).json({
      message: "Le modèle a été supprimé avec succès :)",
      data: "",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la suppression du modèle !",
      data: error,
    });
  }
};
