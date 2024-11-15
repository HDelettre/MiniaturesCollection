import React, { useState } from 'react';

// IMPORT COMPONENTS
import CategorieChoice from './CategorieChoice';
import SeasonChoice from './SeasonChoice';
import RaceChoice from './RaceChoice';
import DriverChoice from './DriverChoice';
import ModelChoice from './ModelChoice';
import ManufacturerChoice from './ManufacturerChoice';

const AdminContainerA = () => {
  const [categorie, setCategorie] = useState("");
  const [season, setSeason] = useState("");
  const [dataBank, setDataBank] = useState("");
const [raceData, setRaceData] = useState("")
const [driverData, setDriverData] = useState("")
const [modelData, setModelData] = useState(["un", "deux", "trois"]);
const [manufacturerData, setManufacturerData] = useState(["un", "deux", "trois"])

  return (
    <div className='displayContainer'>
      <h2>AJOUTER UN NOUVEAU MODELE</h2>
      <div className='fullLine'>
      <CategorieChoice setCategorie={setCategorie} />
      <SeasonChoice setSeason={setSeason} setDataBank={setDataBank} />
      <RaceChoice season={season} dataBank={dataBank} setRaceData={setRaceData} />
      <DriverChoice dataBank={dataBank} raceData={raceData} season={season} setDriverData={setDriverData} />
      <ModelChoice />
      <ManufacturerChoice setManufacturerData={setManufacturerData} />

      </div>
    </div>
  );
}

export default AdminContainerA;
