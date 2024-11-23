import React from "react";

// IMPORT DATABANK
import listOfManufacturer from "../../dataBank/listOfManufacturer.json";

const ManufacturerChoice = ({ setManufacturerData, categorie, season, modelData, driverData }) => {
  let selectAccess = true;

  if (categorie && season && modelData && driverData) {
    selectAccess = false;
  }

  const selectHandle = (e) => {
    const elmtIndex = document.getElementById("manufacturer");
    if (elmtIndex.selectedIndex > 0) {
      setManufacturerData({ name: e.target.value });
    } else {
      setManufacturerData();
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix du fabricant :</label>
      <select
        className="optionBox"
        name="manufacturer"
        id="manufacturer"
        onChange={selectHandle}
        disabled={selectAccess}
      >
        <option name="choice" key="choice" id="choice">
          Sélectionner dans la liste
        </option>
        {listOfManufacturer.map((data) => (
          <option name={data.name} key={data.name} id={data.name}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ManufacturerChoice;
