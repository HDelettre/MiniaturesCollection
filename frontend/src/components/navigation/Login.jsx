import React, { useState } from "react";
import { LOGIN_USER } from "../../utils/userRequest";

const Login = ({ setOptionSelect, setUserData }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailHandle = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  const validHandle = (e) => {
    if (e.target.id === "cancel") {
      setOptionSelect();
    } else {
      const loginRequest = {
        email: email,
        password: password,
      };
      (async () => {
        const fetchLogin = await LOGIN_USER(loginRequest);
        if (fetchLogin.status === 200) {
          await setUserData(fetchLogin.data);
          await setOptionSelect();
        }
      })();
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginContainer_box">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={emailHandle}
          value={email}
          required
          placeholder="xxxxxx.yyyyy@mail.com"
          autoComplete="off"
        />
      </div>
      <div className="loginContainer_box">
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={passwordHandle}
          value={password}
          required
          placeholder="xxxxxx.yyyyy@mail.com"
          autoComplete="off"
        />
      </div>
      <div className="fullLine">
        <div className="buttonInverse" id="valid" onClick={validHandle}>
          VALIDER
        </div>
        <div className="buttonInverse" id="cancel" onClick={validHandle}>
          ABANDONNER
        </div>
      </div>
    </div>
  );
};

export default Login;
