import React, { useState } from "react";

// IMPORT COMPONENTS
import InfoBox from "../standardElements/InfoBox";
import PictureBox from "../standardElements/PictureBox";
import InputBox from "./InputBox";
import StatusChoice from "./StatusChoice";

const ModelCarInfo = ({
  categorie,
  season,
  raceData,
  modelData,
  driverData,
  dataBank,
  manufacturerData,
  setManufacturerData,
}) => {
  const [modelStatus, setModelStatus] = useState("");
  const [reference, setReference] = useState("");
  const [pictureName, setPictureName] = useState(
    `${process.env.REACT_APP_MODELCARS}/defaultPicture.png`
  );
  const [pictureFile, setPictureFile] = useState();

  const saveHandle = () => {};

  return (
    <div className="adminContainer">
      <div className="adminContainer_card">
        <div className="fullLine">
          <h3>Détail du modèle</h3>
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

            <InfoBox title={"Résultat :"} data={driverData.race.position} />
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
      </div>

      <div className="adminContainer_card">
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
    </div>
  );
};

export default ModelCarInfo;
