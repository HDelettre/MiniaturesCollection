import React from 'react';
import ReturnToHome from '../commands/ReturnToHome';

const NavigationBar = ({setMenuIndex, menuIndex, userData}) => {

  const menuHandle = (e) => {
    setMenuIndex(e.target.id)
  }
  return (
    <div className='navigationBar'>
      {menuIndex !== "home" ? <ReturnToHome setMenuIndex={setMenuIndex} /> : ""}
      <div className='navigationBar_button' id="season" onClick={menuHandle} >SAISONS</div>
      <div className='navigationBar_button' id="team" onClick={menuHandle} >TEAMS</div>
      <div className='navigationBar_button' id="driver" onClick={menuHandle} >DRIVERS</div>
      {userData && userData.fonction==="ADMIN" ? <div className='navigationBar_button' id="admin" onClick={menuHandle} >NOUVEAU MODELE</div> :""}
    </div>
  );
}

export default NavigationBar;
