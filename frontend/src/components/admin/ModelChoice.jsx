import React, { useState } from "react";

const ModelChoice = ({ setModelName, setDriverList }) => {

  const [carsList, setCarsList] = useState(["un", "deux", "trois"]);
  
  const selectHandle = async (e) => {
    const elmtIndex = document.getElementById("model");
    if (elmtIndex.selectedIndex > 0) {
      await setModelName(e.target.value);
      await setDriverList(carsList[elmtIndex.selectedIndex - 1].drivers);
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix du modèle :</label>
      <select
        className="optionBox"
        name="model"
        id="model"
        onChange={selectHandle}
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
    </div>
  );
};

export default ModelChoice;
