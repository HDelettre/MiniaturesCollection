import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import CategorieChoice from "./CategorieChoice";
import SeasonChoice from "./SeasonChoice";
import ModelChoice from "./ModelChoice";
import ModelWithRace from "./ModelWithRace";
import RaceChoice from "./RaceChoice";
import DriverChoice from "./DriverChoice";
import PictureBox from "../standardElements/PictureBox";
import InfoBox from "../standardElements/InfoBox";

const ModelData = ({
  setDataBank,
  dataBank,
  driverData,
  setDriverData,
  raceData,
  setRaceData,
  season,
  setSeason
}) => {
  const pathImageFile = `${process.env.REACT_APP_PICTURES}/modelCarImage`;
  const pathPhotoFile = `${process.env.REACT_APP_PICTURES}/modelCars`;

  const [categorie, setCategorie] = useState("");
  const [modelName, setModelName] = useState("");
  const [raceName, setRaceName] = useState("");
  const [withRace, setWithRace] = useState(true);
  const [calendar, setCalendar] = useState();
  const [imageName, setImageName] = useState(`${pathImageFile}/defaultPicture.png`);
  const [imageFile, setImageFile] = useState();
  const [photoName, setPhotoName] = useState(`${pathPhotoFile}/defaultPicture.png`);
  const [photoFile, setPhotoFile] = useState();

  const [driverList, setDriverList] = useState();

  

  useEffect(() => {
    if (raceData && dataBank) {
      const listDrivers = [];
      for (let i = 0; i < raceData.subscript.length; i++) {
        const driverInfo = {
          name: raceData.subscript[i].driver,
          country: raceData.subscript[i].nation,
          model: raceData.subscript[i].car,
          team: raceData.subscript[i].team,
          constructor: raceData.subscript[i].constructor,
          engine: raceData.subscript[i].engine,
          tyres: raceData.subscript[i].tyres,
          qualif: raceData.subscript[i].qualif[0],
          race: raceData.subscript[i].result[0],
          bestLap: raceData.subscript[i].bestLap[0],
        };
        listDrivers.push(driverInfo);
      }
      setDriverList(listDrivers);
    }
  }, [raceData, dataBank]);

  return (
    <div className="adminContainer_card">
      <div className="fullLine">
      <h3>DEFINIR LE MODELE</h3>
      <span className="fa-solid fa-floppy-disk normalIcon" title="Enregistrer le modèle" />
      
      </div>
     

      <CategorieChoice setCategorie={setCategorie} />
      

      <ModelWithRace withRace={withRace} setWithRace={setWithRace} />
      <SeasonChoice setSeason={setSeason} setDataBank={setDataBank} />
      {categorie === "F1" && season && dataBank && withRace === false ? (
        <ModelChoice
          carsList={dataBank.cars}
          setModelName={setModelName}
          setDriverList={setDriverList}
        />
      ) : (
        ""
      )}
      {categorie === "F1" &&
      season &&
      dataBank &&
      withRace === true &&
      calendar ? (
        <RaceChoice
          raceList={calendar}
          setRaceName={setRaceName}
          setRaceData={setRaceData}
        />
      ) : (
        ""
      )}
      {driverList ? (
        <DriverChoice driverList={driverList} setDriverData={setDriverData} />
      ) : (
        ""
      )}
      {driverData && withRace === true ? (
        <>
          <InfoBox title={"Model :"} data={driverData.model} />
          <InfoBox title={"Résultat :"} data={driverData.race.position} />
          <PictureBox
            title={"Ajouter une image du modèle"}
            imageName={imageName}
            pathFile={pathImageFile}
            setImageName={setImageName}
            setImageFile={setImageFile}
          />
        </>
      ) : (
        ""
      )}
      {driverData ? (
        <PictureBox
          title={"Ajouter une photo du modèle"}
          imageName={photoName}
          pathFile={pathPhotoFile}
          setImageName={setPhotoName}
          setImageFile={setPhotoFile}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModelData;
