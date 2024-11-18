import React, { useState } from "react";

//IMPORT COMPONENTS
import InfoBox from "../standardElements/InfoBox";
import InputBox from "./InputBox";
import StatusChoice from "./StatusChoice";
import PictureBox from "../standardElements/PictureBox";


const ModelData = ({
  categorie,
  season,
  raceData,
  driverData,
  modelCarData,
  chptData,
  manufacturerData,
  reference,
  setReference,
  setModelStatus,
  modelStatus,
}) => {
  const [pictureName, setPictureName] = useState(
    `${process.env.REACT_APP_MODELCARS}/defaultPicture.png`
  );
  const [pictureFile, setPictureFile] = useState();

  const saveHandle=() => {
    // RECHERCHE DES ID RACE, DRIVER, MODEL, MANUFACTURER
    const bodyRequest = {
      categorie:categorie,
      season:season,
      race:raceData.name,
      driver:driverData.name,
      model: modelCarData.carName,
      qualif: driverData.qualif,
      result: driverData.race,
      bestLap: driverData.bestLap,
      chpt:"",
      manufacturer:manufacturerData.name,
      reference: reference,
      status: modelStatus,
    };

    console.log("BODYREQUEST : ", bodyRequest)

    // on sauvegarde le modèle, on récupère le modelCarId, puis on enregistre la photo
  }

  return (
    <div className="adminContainer_card">
      <div className="fullLine">
        <h3>DONNEES SUR LA MINIATURE</h3>
        <span
          className="fa-solid fa-floppy-disk normalIcon"
          title="Enregistrer le modèle"
          onClick={saveHandle}
        />
      </div>
      <InfoBox title={"Categorie :"} data={categorie} />
      <InfoBox title={"Saison :"} data={season} />
      {raceData ? (
        <InfoBox title={"Course :"} data={raceData.name} />
      ) : (
        <div className="redBox">PAS DE COURSE</div>
      )}
      {driverData ? (
        <InfoBox title={"Voiture :"} data={driverData.model} />
      ) : (
        <div className="redBox">VOITURE A CONFIRMER</div>
      )}
      {driverData ? (
        <>
          <InfoBox title={"Pilote :"} data={driverData.name} />
          <InfoBox
            title={"Qualification :"}
            data={driverData.qualif.position}
          />
          <InfoBox title={"Résultat :"} data={driverData.race.position} />
          <InfoBox
            title={"Meilleur tour :"}
            data={driverData.bestLap.position}
          />
        </>
      ) : (
        <div className="redBox">PILOTE A CONFIRMER</div>
      )}
      {manufacturerData ? (
        <>
          <InfoBox title={"Fabricant :"} data={manufacturerData.name} />
          <InputBox
            title={"Référence :"}
            generalData={reference}
            setGeneralData={setReference}
          />
          <StatusChoice setModelStatus={setModelStatus} />
        </>
      ) : (
        <div className="redBox">FABRICANT A CONFIRMER</div>
      )}
      {modelStatus ? (
        <PictureBox
          title={"Photo de la Miniature"}
          imageName={pictureName}
          pathFile={`${process.env.REACT_APP_MODELCARS}`}
          setImageName={setPictureName}
          setImageFile={setPictureFile}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ModelData;
