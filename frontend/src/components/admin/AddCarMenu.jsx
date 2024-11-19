import React from "react";

// IMPORT COMPONENTS
import CategorieChoice from "./CategorieChoice";
import SeasonChoice from "./SeasonChoice";
import RaceChoice from "./RaceChoice";
import ModelChoice from "./ModelChoice";
import DriverChoice from "./DriverChoice";
import ManufacturerChoice from "./ManufacturerChoice";

const AddCarMenu = ({
  setCategorie,
  categorie,
  setSeason,
  season,
  dataBank,
  setDataBank,
  raceData,
  setRaceData,
  modelData,
  setModelData,
  driverData,
  setDriverData,
  setManufacturerData,
}) => {
  return (
    <div className="fullLine">
      <CategorieChoice setCategorie={setCategorie} />

      <SeasonChoice
        categorie={categorie}
        setDataBank={setDataBank}
        setSeason={setSeason}
      />

      <RaceChoice
        categorie={categorie}
        season={season}
        dataBank={dataBank}
        setRaceData={setRaceData}
      />

      <ModelChoice
        categorie={categorie}
        season={season}
        dataBank={dataBank}
        setModelData={setModelData}
        setRaceData={setRaceData}
      />

      <DriverChoice
        categorie={categorie}
        season={season}
        raceData={raceData}
        modelData={modelData}
        setDriverData={setDriverData}
        setModelData={setModelData}
      />

      <ManufacturerChoice
        categorie={categorie}
        setManufacturerData={setManufacturerData}
        season={season}
        modelData={modelData}
        driverData={driverData}
      />
    </div>
  );
};

export default AddCarMenu;
