const MODELCARS = require("../models/modelsCars");

exports.createModelCar = async (req, res) => {
  const newModelCars = MODELCARS.build(req.body);
    try {
      await newModelCars.save();
      return res.status(201).json({message: "Le modèle a été ajouté dans la base !", data: newModelCars });
    } catch (error) {
      return res.status(500).json({ message: "CreateModelCar : Le serveur est indisponible !", data: error });
    }
};

exports.getAllModelCars = async (req, res) => {
  try {
    const response = await MODELCARS.findAll();
    if (!response) {
      return res
        .status(404)
        .json({ message: "Aucune donnée n'a été trouvée !", data:"" });
    }
    return res.status(200).json({message: "Les données ont été récupérées ! ", data:response});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "GetAllModelCars : Le serveur est indisponible !", data: error });
  }
};

exports.getOneModelCar = async (req, res) => {
  try {
    const response = await MODELCARS.findOne({
      where:{ modelCarsId: req.params.id },
    });
    if (!response) {
      return res
        .status(404)
        .json({ message: "Aucune donnée n'a été trouvée !", data:"" });
    }
    return res.status(200).json({message: "Les données ont été récupérées ! ", data:response});
  } catch (error) {
    return res
      .status(500)
      .json({ message: "GetAllModelCars : Le serveur est indisponible !", data: error });
  }
};

exports.updateModelCar = async (req, res) => {};

exports.deleteModelCar = async (req, res) => {};
