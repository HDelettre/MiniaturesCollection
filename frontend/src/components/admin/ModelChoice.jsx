import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import InputCase from "../standardElements/InputCase";

const ModelChoice = ({categorie, season, dataBank, setModelData }) => {

  const [carsList, setCarsList] = useState([]);
  let selectAccess = true;

  if (categorie === "F1 without race" && season) {selectAccess=false}
  if (categorie === "Autres" && season) {selectAccess=false}

  useEffect(() => {
    if (categorie === "F1 without race" && dataBank)
    {setCarsList(dataBank.cars)}
  }, [dataBank, categorie]);

  const selectHandle = async (e) => {
    const elmtIndex = document.getElementById("modelChoice");
    if (elmtIndex.selectedIndex > 0) {
      setModelData(carsList[elmtIndex.selectedIndex -1])
    } else {
      setModelData()
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix du modèle :</label>
      {categorie === "F1 without race" && dataBank ?
      <select
      className="optionBox"
        name="model"
        id="modelChoice"
        onChange={selectHandle}
        disabled={selectAccess}
        >
        <option name="choice" key="choice" id="choice">
          Sélectionner dans la liste
        </option>
        {carsList.map((data) => (
          <option name={data.model} key={data.model} id={data.model}>
            {data.model}
          </option>
        ))}
      </select>
      :
      <InputCase generalData={"MODEL"} setGeneralData={setModelData} selectAccess={selectAccess} />
      }
    </div>
  );
};

export default ModelChoice;
