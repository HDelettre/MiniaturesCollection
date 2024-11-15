const MODELCARS = require("../models/modelsCars");

exports.createModelCar = async (req, res) => {};

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
      .json({ message: "Le serveur est indisponible !", data: error });
  }
};

exports.getOneModelCar = async (req, res) => {};

exports.updateModelCar = async (req, res) => {};

exports.deleteModelCar = async (req, res) => {};
