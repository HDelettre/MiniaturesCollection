import React from "react";

const StatusChoice = ({ setModelStatus }) => {
  const statusOption = ["En vitrine", "A monter", "A modifier","En livraison", "Payée", "En commande"];
  const selectHandle = (e) => {
    setModelStatus(e.target.value);
  };

  return (
    <div className="fullLine">
      <label className="labelBox">Choix du status :</label>
      <select
        className="optionBox"
        name="status"
        id="status"
        onChange={selectHandle}
      >
        <option name="choice" key="choice" id="choice">
          Sélectionner dans la liste
        </option>
        {statusOption.map((data) => (
          <option name={data} key={data} id={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusChoice;
