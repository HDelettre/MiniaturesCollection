import React, { useState } from "react";

// IMPORT COMPONENTS
import PictureBox from "./PictureBox";

// IMPORT FUNCTIONS
import { ADD_NEW_PICTURE } from "../../utils/pictureCarRequest";
import { ADD_NEW_IMAGE } from "../../utils/pictureCarRequest";

const PopupAddPicture = ({modelData, setIsLoadedModel, setAddPicture}) => {
  const [categoriePicture, setCategoriePicture] = useState();
  const [pictureName, setPictureName] = useState(
    `${process.env.REACT_APP_MODELCARS}/defaultPicture.png`
  );
  const [pictureFile, setPictureFile] = useState();

  const pathFile = `${process.env.REACT_APP_MODELCARS}`;
  const photoOption = [
    "Miniature",
    "Pilote",
    "Logo Constructeur",
    "Logo Fabricant",
  ];

  const selectHandle = (e) => {
    const elmtIndex = document.getElementById("photoChoice");
    if (elmtIndex.selectedIndex > 0) {
      setCategoriePicture(e.target.value);
    } else {
      setCategoriePicture();
    }
  };

  const validHandle = () => {
    if (categoriePicture && pictureFile) {
      if (categoriePicture === "Miniature") {
        const pictureRequest = new FormData();
        pictureRequest.append("modelCarsId", modelData.modelCarsId);
        pictureRequest.append("modelPicture", pictureFile);
        (async () => {
          const fetchReponsePicture = await ADD_NEW_PICTURE(pictureRequest);
          console.log("REPONSE :", fetchReponsePicture);
          await setIsLoadedModel(false)
        })();
      } else {
        
        (async () => {
          const imageRequest = new FormData();
          imageRequest.append("imageName", pictureFile.name);
          if (categoriePicture === "Pilote") {
            imageRequest.append("driverFile", pictureFile);
          } else {
            imageRequest.append("logoFile", pictureFile);
          }
          const fetchImage = await ADD_NEW_IMAGE(imageRequest);
          console.log("REPONSE IMAGE : ", fetchImage);
        })();
        setAddPicture(false)
      }
    } 
  };

  return (
    <div className="popupPicture">
      <div className="choiceBoxPopup">
        <label className="labelBox">Choix de la catégorie :</label>
        <select
          className="optionBox"
          name="photoChoice"
          id="photoChoice"
          onChange={selectHandle}
        >
          <option name="choice" key="choice" id="choice">
            Sélectionner dans la liste
          </option>
          {photoOption.map((data) => (
            <option name={data} key={data} id={data}>
              {data}
            </option>
          ))}
        </select>
      </div>

      <PictureBox
        title={""}
        setImageFile={setPictureFile}
        setImageName={setPictureName}
        imageName={pictureName}
        pathFile={pathFile}
      />

      <div className="button" onClick={validHandle}>
        VALIDER
      </div>
    </div>
  );
};

export default PopupAddPicture;
