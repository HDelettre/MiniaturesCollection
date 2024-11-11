const MODELCARS = require("../models/modelsCars");

exports.createModelCar = async (req, res) => {};

exports.getAllModelCars = async (req, res) => {
  try {
    const response = await MODELCARS.findAll();
    if (!response) {
      return res
        .status(404)
        .json({ message: "Aucune donnée n'a été trouvée !" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Le serveur est indisponible !", error: error });
  }
};

exports.getOneModelCar = async (req, res) => {};

exports.updateModelCar = async (req, res) => {};

exports.deleteModelCar = async (req, res) => {};
