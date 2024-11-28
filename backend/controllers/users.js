const USERS = require("../models/users");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  // CHECK IF EMAIL EXIST
  const emailExist = await USERS.findOne({
    where: { email: req.body.email },
  });
  if (emailExist) {
    return res
      .status(501)
      .json({ message: "Adresse Email existante", data: "" });
  }

  // CHECK IF INFORMATION ARE COMPLETE
  // CHECK IF INFORMATION ARE CORRECT /EMAIL & PASSWORD
  // FORMAT INPUTS

  // ASH PASSWORD
  const passwordHashed = await bcrypt.hash(req.body.password, 10);
  req.body.password = passwordHashed;
  // CREATE NEW USER
  const newUser = USERS.build(req.body);
  if (req.body.avatar) {
    const pictureFile = JSON.parse(JSON.stringify(req.files.userAvatar))[0];
    newUser["avatar"] = pictureFile.filename;
  }
  try {
    await newUser.save();
    return res
      .status(201)
      .json({ message: "Le compte a été créé avec succès !", data: "" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erreur de Sauvegarde", data: error });
  }
};

exports.loginUser = async (req, res) => {
  // CHECK IF EMAIL EXIST
  const userData = await USERS.findOne({
    where: { email: req.body.email },
  });
  if (!userData) {
    return res
      .status(404)
      .json({ message: "Utilisateur inexistant !", data: "" });
  }
  // CHECK IF PASSWORD IS CORRECT
  const validPassword = await bcrypt.compare(
    req.body.password,
    userData.password
  );
  if (!validPassword) {
    return res
      .status(400)
      .json({ message: "Mot de passe incorrect !", data: "" });
  }
  userData.password = "";
  return res
    .status(200)
    .json({ message: "Connection au compte !", data: userData });
};

exports.getAllUsers = async (req, res) => {
  try {
    const response = await USERS.findAll();
    if (!response) {
      return res
        .status(404)
        .json({ message: "Aucune donnée n'a été trouvée !", data: "" });
    }
    response.forEach((element) => {
      element.password = "";
    });
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

exports.getOneUser = async (req, res) => {
  try {
    const response = await USERS.findOne({
      where: { userId: req.params.id },
    });
    if (!response) {
      return res
        .status(404)
        .json({ message: "Aucune donnée n'a été trouvée !", data: "" });
    }
    response.password = "";
    return res
      .status(200)
      .json({ message: "Les données ont été récupérées ! ", data: response });
  } catch (error) {
    return res.status(500).json({
      message: "GetOneUser : Le serveur est indisponible !",
      data: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await USERS.update(req.body, {
      where: { userId: req.params.id },
    });
    return res
      .status(200)
      .json({ message: "Le profil a été modifié avec succès :)", data: "" });
  } catch (error) {
    return res.status(500).json({
      message: "Erreur lors de la modification du profil !",
      data: error,
    });
  }
};

exports.deleteUser = async (req, res) => {};
