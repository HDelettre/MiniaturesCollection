export const FORMAT_FIRSTNAME = (firstName) => {
  let formatFirstName = firstName.toLowerCase();
  if (formatFirstName.includes("-")) {
    const tiretLocation = formatFirstName.search(/-/);
    formatFirstName =
      formatFirstName.charAt(0).toUpperCase() +
      formatFirstName.slice(1, tiretLocation + 1) +
      formatFirstName.charAt(tiretLocation + 1).toUpperCase() +
      formatFirstName.slice(tiretLocation + 2);
  } else {
    formatFirstName =
      formatFirstName.charAt(0).toUpperCase() +
      formatFirstName.slice(1).toLowerCase();
  }
  return formatFirstName;
};

export const CHECK_USER_DATA = (bodyRequest) => {
  // REGEX EMAIL + FIRST AND LAST NAME
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const nameRegex = /^[A-Za-zéèêùçàÉÈÊÀÙ-\s]+$/;
  // TOUS LES CHAMPS SONT REQUIS
  for (const [key, value] of Object.entries(bodyRequest)) {
    console.log(key);
    if (value === "") {
      return "Veuillez compléter tous les champs !";
    }
  }
  // CHECK EMAIL
  const checkEmail = emailRegex.test(bodyRequest.email);
  if (checkEmail !== true) {
    return "Veuillez vérifier le format de l'adresse mail !";
  }
  // CHECK PASSWORD FORMAT
  const checkPassword = passwordRegex.test(bodyRequest.password);
  if (checkPassword !== true || bodyRequest.password.length < 8) {
    return "Veuillez vérifier le format de votre mot de passe !";
  }
  // CHECK FIRSTNAME
  const checkFirstName = nameRegex.test(bodyRequest.firstName);
  if (checkFirstName !== true) {
    return "Veuillez vérifier votre prénom (lettre uniquement) !";
  }
  // CHECK LASTNAME
  const checklastName = nameRegex.test(bodyRequest.lastName);
  if (checklastName !== true) {
    return "Veuillez vérifier votre nom (lettre uniquement) !";
  }
  return "valid";
};

export const CHECK_PICTURE_FORMAT = (pictureData) => {
  const mimeTypeAvailable = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
  };
  const mimeTypePicture = mimeTypeAvailable[pictureData.type];
  if (mimeTypePicture === undefined) {
    return "Les images acceptées doivent être au format .jpg, .jpeg ou .png";
  }
  if (pictureData.size > 5000000) {
    return "Ce fichier est trop volumineux ! (Max 5 Mo)";
  }
  return "VALID";
};
