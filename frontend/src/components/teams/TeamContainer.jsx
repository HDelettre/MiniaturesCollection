import React, { useState } from "react";

// IMPORT COMPONENTS
import SmallCard from "../standardElements/SmallCard";
import TeamLogo from "./TeamLogo";

const TeamContainer = ({ allModels, setModelSelected, setMenuIndex }) => {
  const [teamLoaded, setTeamLoaded] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [teamSelect, setTeamSelect] = useState("");
  const [carsListByTeam, setCarsListByTeam] = useState();

  if (teamLoaded === false) {
    for (let i = 0; i < allModels.length; i++) {
      if (!teamList.includes(allModels[i].team)) {
        setTeamList((teamList) => [...teamList, allModels[i].team]);
      }
    }
    setTeamLoaded(true);
  }

  return teamLoaded === true ? (
    <div className="bodyContainer">
      {teamSelect === "" ? (
        <>
          {teamList.map((data) => (
            // <div className="button" key={data} id={data} onClick={selectHandle}>
            //   {data}

            // </div>
            <TeamLogo
              key={data}
              element={data}
              setTeamSelect={setTeamSelect}
              setCarsListByTeam={setCarsListByTeam}
              allModels={allModels}
            />
          ))}
        </>
      ) : (
        <>
          {carsListByTeam ? (
            <>
              <div className="titleBox">
                Les modèles {teamSelect} dans la collection
              </div>
              {carsListByTeam.map((element) => (
                <SmallCard
                  key={element.modelCarsId}
                  element={element}
                  setMenuIndex={setMenuIndex}
                  setModelSelected={setModelSelected}
                />
              ))}
            </>
          ) : (
            <span className="spinloader" />
          )}
        </>
      )}
    </div>
  ) : (
    <span className="spinloader" />
  );
};

export default TeamContainer;
