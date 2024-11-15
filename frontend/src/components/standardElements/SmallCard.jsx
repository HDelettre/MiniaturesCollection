import React from 'react';

const SmallCard = ({element}) => {
  return (
    <div className='smallCard'>
      <div className='fullLine'>
        <img src={`${process.env.REACT_APP_PICTURES}/modelCars/defaultPicture.png`} alt="" />
      </div>
      <div className='fullLine'>{element.model} : {element.season}</div>
      <div className='fullLine'>{element.driver} - {element.race}</div>
    </div>
  );
}

export default SmallCard;

// <img src={`${Process.env.REACT_APP_PICTURES}/modelCars/${element.}`} alt="" />