import React from "react";

const RaceData = ({ raceData, season }) => {
  return (
    <div className="adminContainer_card">
      {raceData ? 
      <>
      <div className="fullLine">
      <h3>`{raceData.name} - {season}`</h3> 
        <img className="smallFlag" src={`${process.env.REACT_APP_PICTURES}/flags/${raceData.flag}`} alt={raceData.name} />
      </div>
      <div className="fullLine">
        <div className="labelBox">Circuit :</div>
        <div className="labelBox">{raceData.trackName}</div>
      </div>
      <div className="fullLine">
        <div className="labelBox">Date :</div>
        <div className="labelBox">{raceData.date}</div>
      </div>
      <div className="fullLine">
        <div className="labelBox">Distance :</div>
        <div className="labelBox">{raceData.distance}</div>
      </div>
      <div className="fullLine">
      <img className="trackPicture" src={`${process.env.REACT_APP_PICTURES}/tracks/${raceData.trackPicture}`} alt={raceData.trackName} />
      </div>
      </>
      : <h3>DEFINIR LA COURSE</h3>}
    </div>
  );
};

export default RaceData;
