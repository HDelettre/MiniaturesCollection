import React, { useEffect, useState } from "react";

// INPUT COMPONENTS
import InputCase from "../standardElements/InputCase";

// IMPORT FUNCTIONS
import { dataOfCar } from "../../utils/searchCarData";

const DriverChoice = ({
  categorie,
  season,
  raceData,
  modelData,
  setDriverData,
  setModelData,
}) => {
  const [driverList, setDriverList] = useState([]);
  let selectAccess = true

  if (categorie === "F1 with race" && raceData) {selectAccess=false}
  if (categorie === "F1 without race" && modelData) {selectAccess=false}
  if (categorie && categorie==="Autres" && season) {selectAccess=false}

  useEffect(() => {
    if (raceData && categorie === "F1 with race") {
      const listDrivers = [];
      for (let i = 0; i < raceData.subscript.length; i++) {
        const driverInfo = {
          name: raceData.subscript[i].driver,
          country: raceData.subscript[i].nation,
          model: raceData.subscript[i].car,
          team: raceData.subscript[i].team,
          constructor: raceData.subscript[i].constructor,
          engine: raceData.subscript[i].engine,
          tyres: raceData.subscript[i].tyres,
          qualif: raceData.subscript[i].qualif[0],
          race: raceData.subscript[i].result[0],
          bestLap: raceData.subscript[i].bestLap[0],
        };
        listDrivers.push(driverInfo);
      }
      setDriverList(listDrivers);
    } else if (modelData && categorie === "F1 without race") {
      const listDrivers = [];
      for (let i = 0; i < modelData.drivers.length; i++) {
        const driverInfo = {
          name: modelData.drivers[i].name,
          country: modelData.drivers[i].nation,
          model: modelData.model,
          team: modelData.team,
        };
        listDrivers.push(driverInfo);
      }
      setDriverList(listDrivers);
      
    } 
  }, [categorie, modelData, raceData]);

  const selectHandle = async () => {
    const elmtIndex = document.getElementById("driverChoice");
    if (elmtIndex.selectedIndex > 0) {
      await setDriverData(driverList[elmtIndex.selectedIndex - 1]);
      if (!modelData) {
        const carData = dataOfCar(
          driverList[elmtIndex.selectedIndex - 1].model,
          season
        );
        await setModelData(carData);
      }
    } else {
      await setDriverData()
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix du pilote :</label>
      {(raceData && categorie === "F1 with race") || (modelData && categorie==="F1 without race")  ? (
        <select
          className="optionBox"
          name="driver"
          id="driverChoice"
          onChange={selectHandle}
          disabled={selectAccess}
        >
          <option name="choice" key="choice" id="choice">
            Sélectionner dans la liste
          </option>
          {driverList.length > 0 ? (
            <>
              {driverList.map((data) => (
                <option name={data.name} key={data.name} id={data.name}>
                  {data.name}
                </option>
              ))}
            </>
          ) : (
            ""
          )}
        </select>
      ) : (
        <InputCase generalData={"DRIVER"} setGeneralData={setDriverData} selectAccess={selectAccess} />
      )}
    </div>
  );
};

export default DriverChoice;
