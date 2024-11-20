import React from 'react';

const DriverBox = ({modelDataCompilation, modelData}) => {
  return (
    <div className="modelSheetCard">
          <h3>Le pilote</h3>
          <div className="fullLine">
            {modelData.driver}
            <img
              className="smallFlag"
              src={`${process.env.REACT_APP_PICTURES}/flags/${modelDataCompilation.driverFlag}`}
              alt=""
            />
          </div>
          <div className="fullLine">
            <img
              className="picture"
              src={`${process.env.REACT_APP_PICTURES}/drivers/${modelDataCompilation.driverPicture}`}
              alt=""
            />
          </div>
          <div className="fullLine">
            Championnat du Monde {modelData.season}
          </div>
          <div className="fullLine">
            {modelDataCompilation.driverChpt.position} -{" "}
            {modelDataCompilation.driverChpt.points} Pts
          </div>
        </div>
  );
}

export default DriverBox;
