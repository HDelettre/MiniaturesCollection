import React from "react";

const ModelWithRace = ({withRace, setWithRace}) => {

  const updateHandle = () => {
    if (withRace === true) {
      setWithRace(false);
    } else {
      setWithRace(true);
    }
  };
  return (
    <div className="fullLine">
      <label className="labelBox">Grand Prix défini :</label>
      <input
      className="optionBox"
        type="checkbox"
        name="withRace"
        id="withRace"
        onChange={updateHandle}
        checked={withRace === true ? true : false}
      />
    </div>
  );
};

export default ModelWithRace;
