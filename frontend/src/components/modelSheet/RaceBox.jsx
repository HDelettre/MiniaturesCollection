import React from 'react';

const RaceBox = ({modelDataCompilation, modelData}) => {
  return (
    <div className="modelSheetCard">
            <div className="fullLine">
              <h3>{modelData.race}</h3>
              <img
                className="smallFlag"
                src={`${process.env.REACT_APP_PICTURES}/flags/${modelDataCompilation.raceFlag}`}
                alt=""
              />
            </div>
            <div className="fullLine">
              <img
                className="picture"
                src={`${process.env.REACT_APP_PICTURES}/tracks/${modelDataCompilation.trackPicture}`}
                alt={modelDataCompilation.raceTrack}
              />
            </div>
            <div className="fullLine">{modelDataCompilation.raceTrack}</div>
            <div className="fullLine">{modelDataCompilation.raceDate}</div>
            <div className="fullLine">{modelDataCompilation.raceDistance}</div>
          </div>
  );
}

export default RaceBox;
