import React, { useState } from "react";

// IMPORT COMPONENTS
import InfoBox from "../standardElements/InfoBox";

// IMPORT DATABANK
import listOfTeam from "../../dataBank/teamsData.json";

// IMPORT FUNCTIONS
import { dataOfCar } from "../../utils/searchCarData";

const TeamData = ({ modelCarSelected, season, modelCarData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [teamInfo, setTeamInfo] = useState();
console.log("* :",modelCarData);
  if (isLoading === false) {
    if (!teamInfo && modelCarSelected) {
      for (let i = 0; i < listOfTeam.length; i++) {
        if (listOfTeam[i].constructor === modelCarData.constructor) {
          setTeamInfo(listOfTeam[i]);
          setIsLoading(true);
          break;
        }
      }
    }
  }

  console.log("TEAM DATA : ", modelCarSelected);

  return (
    <div className="adminContainer_card">
      {isLoading === false ? (
        <h3>DONNEES SUR LE CONSTRUCTEUR</h3>
      ) : (
        <>
          <div className="fullLine">
            <h3>{teamInfo.constructor}</h3>
            <img
              className="bigFlag"
              src={`${process.env.REACT_APP_PICTURES}/logos/${teamInfo.logo}`}
              alt=""
            />
          </div>
          <InfoBox title={"Premier Grand Prix :"} data={teamInfo.start} />
          <InfoBox title={"Dernier Grand Prix :"} data={teamInfo.end} />
          <InfoBox title={"Grand Prix disputé :"} data={teamInfo.gpNumber} />
          <InfoBox title={"Titre pilote :"} data={teamInfo.chptDriver} />
          <InfoBox title={"Titre constructeur :"} data={teamInfo.chptCstr} />
          <InfoBox title={"Victoire :"} data={teamInfo.victory} />
          <InfoBox title={"Podium :"} data={teamInfo.podium} />
          <InfoBox title={"Pole position :"} data={teamInfo.polePosition} />
          <InfoBox title={"Meilleur tour :"} data={teamInfo.bestLap} />
        </>
      )}
    </div>
  );
};

export default TeamData;
