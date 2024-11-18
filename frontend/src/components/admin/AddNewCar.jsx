import React, { useState } from "react";

// IMPORT COMPONENTS
import AddCarMenu from "./AddCarMenu";
import ModelCarInfo from "./ModelCarInfo";

const AddNewCar = () => {
  const [categorie, setCategorie] = useState("");
  const [season, setSeason] = useState("");
  const [dataBank, setDataBank] = useState("");
  const [raceData, setRaceData] = useState("");
  const [modelData, setModelData] = useState("");
  const [driverData, setDriverData] = useState("");
  const [manufacturerData, setManufacturerData] = useState("");

  return (
    <div className="displayContainer">
      <div className="fullLine">
        <h2>AJOUTER UN NOUVEAU MODELE</h2>
      </div>
      <AddCarMenu
        setCategorie={setCategorie}
        categorie={categorie}
        setSeason={setSeason}
        season={season}
        setDataBank={setDataBank}
        dataBank={dataBank}
        raceData={raceData}
        setRaceData={setRaceData}
        modelData={modelData}
        setModelData={setModelData}
        driverData={driverData}
        setDriverData={setDriverData}
        setManufacturerData={setManufacturerData}
      />
      <ModelCarInfo
        categorie={categorie}
        season={season}
        raceData={raceData}
        modelData={modelData}
        driverData={driverData}
        manufacturerData={manufacturerData}
        setManufacturerData={setManufacturerData}
        dataBank={dataBank}
      />
    </div>
  );
};

export default AddNewCar;
