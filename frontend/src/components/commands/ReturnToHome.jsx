import React from 'react';

const ReturnToHome = ({setMenuIndex}) => {

  const returnHandle = () => {
    setMenuIndex("home")
  }

  return (
    <div className='fa-solid fa-home normalIcon' onClick={returnHandle} />
  );
}

export default ReturnToHome;
