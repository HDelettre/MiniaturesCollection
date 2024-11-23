import React, { useState } from "react";
import InputSignupBox from "../commands/InputSignupBox";
import PictureBox from "../standardElements/PictureBox";
import { CREATE_USER } from "../../utils/userRequest";

const Signup = ({ setOptionSelect }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pseudo, setPseudo] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState("ADMIN");
  const [avatarName, setAvatarName] = useState(
    `${process.env.REACT_APP_PICTURES}/users/defaultPicture.png`
  );
  const [avatarFile, setAvatarFile] = useState();

  const pathFile = `${process.env.REACT_APP_PICTURES}/users/`;

  const cancelHandle = () => {
    setOptionSelect();
  };

  const changeHandle = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const validHandle = () => {
    // VERIF TOUS LES CHAMPS SONT REMPLIS
    // FORMATAGE DES ENTREES
    const bodyRequest = new FormData();
    bodyRequest.append("email", email);
    bodyRequest.append("password", password);
    bodyRequest.append("firstName", firstName);
    bodyRequest.append("lastName", lastName);
    bodyRequest.append("pseudo", pseudo);
    bodyRequest.append("fonction", role);
    bodyRequest.append("avatar", avatarName);
    bodyRequest.append("userAvatar", avatarFile);
    (async () => {
      const fetchCreateUser = await CREATE_USER(bodyRequest);
      console.log(fetchCreateUser)
      setOptionSelect()
    })();
  };

  return (
    <div className="popupSignup">
      <div className="fullLine">
        <h3>Créer un compte</h3>
        <span
          className="fa-solid fa-square-xmark"
          style={{ color: "red", cursor: "pointer" }}
          onClick={cancelHandle}
        />
      </div>

      <div className="fullLine">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={changeHandle}
          value={email}
          required
          placeholder="xxxxxx.yyyyy@mail.com"
          autoComplete="off"
        />
      </div>
      <div className="fullLine">
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={changeHandle}
          value={password}
          required
          placeholder="xxxxxx.yyyyy@mail.com"
          autoComplete="off"
        />
      </div>
      <InputSignupBox
        title={"Prénom"}
        data={firstName}
        setData={setFirstName}
      />
      <InputSignupBox title={"Nom"} data={lastName} setData={setLastName} />
      <InputSignupBox title={"Pseudo"} data={pseudo} setData={setPseudo} />
      <PictureBox
        title={"Votre image"}
        imageName={avatarName}
        pathFile={pathFile}
        setImageName={setAvatarName}
        setImageFile={setAvatarFile}
      />
      <div className="button" onClick={validHandle}>
        Créer le compte
      </div>
    </div>
  );
};

export default Signup;
