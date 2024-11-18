import React, { useState } from "react";

const InputCase = ({ generalData, setGeneralData, selectAccess }) => {
  const [data, setData] = useState();

  const changeHandle = (e) => {
    setData(e.target.value);
    if (generalData === "RACE") {
      setGeneralData({ name: e.target.value });
    }
    if (generalData==="SAISON") {
      setGeneralData(e.target.value)
    }
    if (generalData==="DRIVER") {
      setGeneralData({
        name: e.target.value,
        country: "",
        model: "",
        team: "",
        constructor: "",
        engine: "",
        tyres: "",
        qualif: { position: "", time: "", gap: "" },
        race: { position: "", time: "", gap: "" },
        bestLap: { position: "", time: "", gap: "" },
      })
    }
    if (generalData==="MODEL") {
      setGeneralData({
        name:e.target.value,
      })
    }
    
  };

  return (
    <div className="fullLine">
      <input
        type="text"
        name="inputCase"
        className="labelBox"
        value={data}
        onChange={changeHandle}
        disabled={selectAccess}
      />
    </div>
  );
};

export default InputCase;
