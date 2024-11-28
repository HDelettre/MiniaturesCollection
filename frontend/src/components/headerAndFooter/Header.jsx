import React from "react";

// IMPORT COMPONENTS
import CreateUser from "./CreateUser";
import UserInfo from "./UserInfo";

const Header = ({ userData, setUserData, defaultUser, setMessageInfo }) => {
  return (
    <div className="headerContainer">
      <div className="headerContainer_title">
        <h1>MA COLLECTION DE MINIATURES</h1>
      </div>
      <div className="headerContainer_user">
        {userData.userId === "0000" ? (
          <CreateUser setUserData={setUserData}
          setMessageInfo={setMessageInfo}
          />
        ) : (
          <UserInfo
            userData={userData}
            setUserData={setUserData}
            defaultUser={defaultUser}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
