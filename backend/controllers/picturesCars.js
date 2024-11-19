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

exports.getAllPictureCars = async (req, res) => {};

exports.getOnePictureCar = async (req, res) => {};

exports.updatePictureCar = async (req, res) => {};

exports.deletePictureCar = async (req, res) => {};

exports.addImage = async (req, res) => {
      //fs.writeFile(`pictures/modelCarImage/${req.imageName}`, req.imageFile);
    return res
      .status(201)
      .json({ message: "L'image a été sauvegardé !", data: "" });
  // try {
  //   const fs = require("fs");
  //   console.log("ADD IMAGE")
  //   fs.writeFile(`pictures/modelCarImage/${req.imageName}`, req.imageFile);
  //   return res
  //     .status(201)
  //     .json({ message: "L'image a été sauvegardé !", data: "" });
  // } catch (error) {
  //   return res
  //     .status(500)
  //     .json({
  //       message: "AddImage : Le serveur est indisponible !",
  //       data: error,
  //     });
  // }
};
