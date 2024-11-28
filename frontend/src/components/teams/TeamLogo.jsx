import React, { useEffect, useState } from "react";

// IMPORT DATABANK
import teamCollection from "../../dataBank/teamsLogos";

const TeamLogo = ({ element, setTeamSelect, setCarsListByTeam, allModels }) => {
  const [logoTeam, setLogoTeam] = useState("defaultPicture.png");

  const selectHandle = (e) => {
    setTeamSelect(e.target.id);
    setCarsListByTeam(allModels.filter((model) => model.team == e.target.id));
  };

  useEffect(() => {
    setLogoTeam(teamCollection.filter((team) => team.team === element));
  }, []);

  return (
    <div className="logoTeam">
      <img
        src={`${process.env.REACT_APP_PICTURES}/logos/${logoTeam[0].logo}`}
        alt={logoTeam[0].team}
        id={element} onClick={selectHandle}
      />
    </div>
  );
};

export default TeamLogo;
