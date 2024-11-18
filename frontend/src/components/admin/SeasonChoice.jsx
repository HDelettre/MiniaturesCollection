import React from "react";

// IMPORT COMPONENTS
import InputCase from "../standardElements/InputCase";

// IMPORT FUNCTIONS
import { DATABANK_SELECTION } from "../../utils/dataBankSelection";

const SeasonChoice = ({ setSeason, setDataBank, categorie }) => {
  const seasonOption = [];
  let selectAccess = true;

  for (let i = 1950; i < 2025; i++) {
    seasonOption.push(i);
  }

  if (!categorie) {
    selectAccess = true;
  } else {
    selectAccess = false;
  }

  const selectHandle = async (e) => {
    const elmtIndex = document.getElementById("seasonChoice");
    console.log("e :", elmtIndex.selectedIndex)
    if (elmtIndex.selectedIndex > 0) {
      await setSeason(e.target.value);
      if (categorie !== "Autres") {
        await setDataBank(DATABANK_SELECTION(e.target.value.toString()));
      }
    } else {
      await setSeason();
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix de l'année :</label>
      {categorie && categorie !== "Autres" ? (
        <select
          className="optionBox"
          name="season"
          id="seasonChoice"
          onChange={selectHandle}
          disabled={selectAccess}
        >
          <option name="choice" key="choice" id="choice">
            Sélectionner dans la liste
          </option>
          {seasonOption.map((data) => (
            <option name={data} key={data} id={data}>
              {data}
            </option>
          ))}
        </select>
      ) : (
        <InputCase
          generalData={"SAISON"}
          setGeneralData={setSeason}
          selectAccess={selectAccess}
        />
      )}
    </div>
  );
};

export default SeasonChoice;
