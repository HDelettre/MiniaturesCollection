import React from 'react';

// IMPORT COMPONENTS
import ModelBar from '../standardElements/ModelBar';

const MiniatureBox = ({pictureCollection, modelData, modelDataCompilation}) => {
  return (
    <div className="modelSheetCard">
    <h3>La miniature</h3>
    <div className="fullLine">
      Fabricant : {modelData.manufacturer}
      <img
        className="smallFlag"
        src={`${process.env.REACT_APP_PICTURES}/logos/${modelDataCompilation.manufacturerLogo}`}
        alt={modelData.manufacturer}
      />
    </div>
    <div className="fullLine">Référence : {modelData.reference}</div>
    <div className="fullLine">Status : {modelData.status}</div>
    <div className="fullLine">
      <img
        className="picture"
        src={`${process.env.REACT_APP_PICTURES}/modelCars/${pictureCollection[0].pictureName}`}
        alt={modelData.model}
      />
    </div>
    <ModelBar />
  </div>
  );
}

export default MiniatureBox;