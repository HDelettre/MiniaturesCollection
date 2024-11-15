import React from 'react';

// IMPORT FUNCTIONS
import { DATABANK_SELECTION } from '../../utils/dataBankSelection';

const SeasonChoice = ({setSeason, setDataBank}) => {
  const seasonOption = [];
  for (let i=1950; i<2025; i++) {
    seasonOption.push(i)
  }

  const selectHandle = async (e) => {
    await setSeason(e.target.value)
    await setDataBank(DATABANK_SELECTION(e.target.value.toString()))
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix de l'année :</label>
      <select
        className="optionBox"
        name="season"
        id="season"
        onChange={selectHandle}
      >
        <option name="choice" key="choice" id="choice">Sélectionner dans la liste</option>
        {seasonOption.map((data) => (
          <option name={data} key={data} id={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SeasonChoice;
