import React, { useState } from "react";

// IMPORT DATA
import listOfManufacturer from "../../dataBank/listOfManufacturer.json";
import StatusChoice from "../admin/StatusChoice";
import InputCase from "../standardElements/InputCase";

// IMPORT FUNCTION
import { UPDATE_MODEL } from "../../utils/modelCarRequest";

const PopupEditModel = ({ modelData, setIsLoadedModel, setEditModel }) => {
  const [statusModel, setStatusModel] = useState(modelData.status);
  const [reference, setReference] = useState(modelData.reference);
  const [manufacturer, setManufacturer] = useState(modelData.manufacturer);

  const manufacturerHandle = (e) => {
    setManufacturer(e.target.value);
  };

  const validHandle = () => {
    const bodyUpdate = {
      manufacturer: manufacturer,
      reference: reference,
      status: statusModel,
    }(async () => {
      const fetchUpdate = await UPDATE_MODEL(bodyUpdate, modelData.modelCarsId);
      console.log("FETCH UPDATE : ", fetchUpdate);
      await setIsLoadedModel(false);
      await setEditModel(false);
    })();
  };

  const cancelHandle = () => {
    setEditModel(false);
  };

  const manufacturerList = listOfManufacturer;
  return (
    <div className="popupPicture">
      <div className="choiceBoxPopup">
        <div className="fullLine">
          <h3>Mise à jour du modèle</h3>
          <span
            className="fa-solid fa-square-xmark"
            style={{ color: "red", cursor: "pointer" }}
            onClick={cancelHandle}
          />
        </div>
        <label className="labelBox">Choix du fabricant :</label>
        <select
          className="optionBox"
          name="manufacturerChoice"
          id="manufacturerChoice"
          onChange={manufacturerHandle}
        >
          <option name="choice" key="choice" id="choice">
            Sélectionner dans la liste
          </option>
          {manufacturerList.map((data) => (
            <option name={data.name} key={data.name} id={data.name}>
              {data.name}
            </option>
          ))}
        </select>
      </div>
      <div className="choiceBoxPopup">
        <label className="labelBox">Modifier la référence :</label>
        <InputCase
          generalData="update"
          setGeneralData={setReference}
          selectAccess={false}
          generalValue={modelData.reference}
        />
      </div>
      <StatusChoice setModelStatus={setStatusModel} />
      <div className="button" onClick={validHandle}>
        VALIDER
      </div>
    </div>
  );
};

export default PopupEditModel;
