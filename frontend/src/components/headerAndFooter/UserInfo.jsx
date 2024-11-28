import React from 'react';

const UserInfo = ({userData, setUserData, defaultUser}) => {

  const logoutHandle = () => {
    setUserData(defaultUser)
  }

  return (
    
    <div className='fullLine'>
      <h3>Bienvenue {userData.pseudo}</h3>
      <img src={`${process.env.REACT_APP_PICTURES}/users/${userData.avatar}`} />
      <div className='userBar'>
        <span className='fa-solid fa-user' title='Modifier vos données' />
        <span className='fa-solid fa-right-to-bracket' title='Déconnexion' onClick={logoutHandle} />
      </div>
    </div>
  );
}

export default UserInfo;