import React, { useState } from "react";

// IMPORT COMPONENTS
import Login from "../navigation/Login";
import Signup from "../navigation/Signup";

const CreateUser = ({ setUserData, setMessageInfo }) => {
  const [optionSelect, setOptionSelect] = useState();

  const choiceHandle = (e) => {
    setOptionSelect(e.target.id);
  };

  return (
    <>
      {optionSelect === "login" ? (
        <Login
          setOptionSelect={setOptionSelect}
          setUserData={setUserData}
          setMessageInfo={setMessageInfo}
        />
      ) : (
        <>
          <div
            className="headerContainer_user--button"
            id="login"
            onClick={choiceHandle}
          >
            Se connecter
          </div>
          <div
            className="headerContainer_user--button"
            id="signup"
            onClick={choiceHandle}
          >
            Créer un compte
          </div>
        </>
      )}

      {optionSelect === "signup" ? (
        <Signup
          setOptionSelect={setOptionSelect}
          setMessageInfo={setMessageInfo}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default CreateUser;
