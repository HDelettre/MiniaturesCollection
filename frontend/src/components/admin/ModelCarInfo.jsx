import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import InfoBox from "../standardElements/InfoBox";
import PictureBox from "../standardElements/PictureBox";
import InputBox from "./InputBox";
import StatusChoice from "./StatusChoice";

// IMPORT FUNCTIONS
import { CREATE_MODEL } from "../../utils/modelCarRequest";
import { ADD_NEW_IMAGE, ADD_NEW_PICTURE } from "../../utils/pictureCarRequest";

const ModelCarInfo = ({
  categorie,
  season,
  raceData,
  modelData,
  driverData,
  manufacturerData,
  setModelsUpload,
  setMenuIndex,
}) => {
  const [modelStatus, setModelStatus] = useState("");
  const [reference, setReference] = useState("");
  const [pictureName, setPictureName] = useState(
    `${process.env.REACT_APP_MODELCARS}/defaultPicture.png`
  );
  const [pictureFile, setPictureFile] = useState();
  const [imageName, setImageName] = useState(
    `${process.env.REACT_APP_MODELCAR_IMAGE}/defaultPicture.png`
  );
  const [imageFile, setImageFile] = useState();

  let accessSave = false;

  useEffect(() => {
    if (
      modelData &&
      imageName === `${process.env.REACT_APP_MODELCAR_IMAGE}/defaultPicture.png`
    ) {
      setImageName(
        `${process.env.REACT_APP_MODELCAR_IMAGE}/${modelData.picture}`
      );
    }
  }, [modelData, imageName]);
  if (accessSave === false) {
    if (
      categorie &&
      season &&
      modelData &&
      driverData &&
      manufacturerData &&
      reference &&
      modelStatus
    ) {
      accessSave = true;
    }
  }
  
  const saveHandle = () => {
    if (accessSave === true) {
      let imageFileName = modelData.picture;
      if (imageFile) {
        imageFileName = imageFile.name;
      }

      let constructorName = ""
      if (categorie === "F1 with race") {
        constructorName=modelData.constructor
      } else if (categorie === "F1 without race") {
        constructorName = modelData.team
      } else {
        constructorName=""
      }

      const bodyRequest = {
        categorie: categorie,
        season: season,
        model: modelData.model,
        driver: driverData.name,
        race: raceData.name,
        manufacturer: manufacturerData.name,
        reference: reference,
        status: modelStatus,
        team: constructorName,
        imageName: imageFileName,
      };


      (async () => {
        const fetchReponse = await CREATE_MODEL(bodyRequest);
        console.log("REPONSE :", fetchReponse);

        if (pictureFile) {
          const pictureRequest = new FormData();
          pictureRequest.append("modelCarsId", fetchReponse.data.modelCarsId);
          pictureRequest.append("modelPicture", pictureFile);

          const fetchReponsePicture = await ADD_NEW_PICTURE(pictureRequest);
          console.log("REPONSE :", fetchReponsePicture);
        }

        if (imageFile) {
          const imageRequest = new FormData();
          imageRequest.append("imageName", imageFile.name);
          imageRequest.append("imageFile", imageFile);
          const fetchImage = await ADD_NEW_IMAGE(imageRequest);
          console.log("REPONSE IMAGE : ", fetchImage);
        }

        await setModelsUpload(false);
        await setMenuIndex("home");
      })();
    }
  };

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
            {categorie === "F1 with race" ? (
              <InfoBox title={"Résultat :"} data={driverData.race.position} />
            ) : (
              ""
            )}
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
        {modelData ? (
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

      <div className="adminContainer_card">
        {modelData ? (
          <PictureBox
            title={"Image de la voiture"}
            imageName={imageName}
            pathFile={`${process.env.REACT_APP_MODELCAR_IMAGE}`}
            setImageName={setImageName}
            setImageFile={setImageFile}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ModelCarInfo;
