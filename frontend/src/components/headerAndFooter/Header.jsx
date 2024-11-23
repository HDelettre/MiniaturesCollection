import React from "react";

// IMPORT COMPONENTS
import CreateUser from "./CreateUser";
import UserInfo from "./UserInfo";

const Header = ({ userData, setUserData }) => {
  
  return (
    <div className="headerContainer">
      <div className="headerContainer_title">
        <h1>MA COLLECTION DE MINIATURES</h1>
      </div>
      <div className="headerContainer_user">
        {userData === undefined ? (
          <CreateUser setUserData={setUserData} />
        ) : (
          <UserInfo userData={userData} setUserData={setUserData} />
        )}
      </div>
    </div>
  );
};

export default Header;
