import React from 'react';
import PictureBar from './PictureBar';

const PhotoCard = ({element, modelData}) => {
  return (
    <div className="smallCard" >
      <div className="fullLine" >
        <img
          src={`${process.env.REACT_APP_PICTURES}/modelCars/${element.pictureName}`}
          alt={`${modelData.model} : ${modelData.season}`}
        />
      </div>
      <div className="fullLine">
        <PictureBar />
      </div>
    </div>
  );
}

export default PhotoCard;
