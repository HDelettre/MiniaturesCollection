import React, { useState } from "react";

// IMPORT COMPONENTS
import ModelData from "./ModelData";
import DriverData from "./DriverData";
import RaceData from "./RaceData";

const AdminContainer = () => {
  const [season, setSeason] = useState();
  const [dataBank, setDataBank] = useState();
  const [driverData, setDriverData] = useState();
  const [raceData, setRaceData] = useState();

  return (
    <div className="displayContainer">
      <h2>AJOUTER UN NOUVEAU MODELE</h2>
      <div className="adminContainer">
        <ModelData
          setDataBank={setDataBank}
          dataBank={dataBank}
          driverData={driverData}
          setDriverData={setDriverData}
          raceData={raceData}
          setRaceData={setRaceData}
          season={season}
          setSeason={setSeason}
        />
        <DriverData driverData={driverData} />
        <>
        <RaceData raceData={raceData} season={season} />
        <RaceData raceData={raceData} season={season} />
        </>
      </div>
    </div>
  );
};

export default AdminContainer;
