import React, {useEffect, useState} from 'react';

const DriverChoice = ({dataBank, raceData, season, setDriverData}) => {

  const [driverList, setDriverList] = useState([])

  console.log("DATABANK IN DRIVERCHOICE: ", dataBank)

  useEffect(() => {
    if (raceData && dataBank) {
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
    }
  }, [raceData, dataBank]);

  const optionauth = "disable"

  // const driverSelectSurvey = document.getElementById("driver")
  // if (optionauth === "disabled") {driverSelectSurvey}
  // driverSelectSurvey.addEventListener 

  const selectHandle = async () => {
    const elmtIndex = document.getElementById("driver");
    if (elmtIndex.selectedIndex > 0) {
      await setDriverData(driverList[elmtIndex.selectedIndex - 1]);
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix du pilote :</label>
      <select
        className="optionBox"
        name="driver"
        id="driver"
        onChange={selectHandle}
        disabled={optionauth === "disabled" ? true : false}
      >
        <option name="choice" key="choice" id="choice">
          Sélectionner dans la liste
        </option>
        {driverList.length > 0 ? 
        <>
        {driverList.map((data) => (
          <option name={data.name} key={data.name} id={data.name}>
            {data.name}
          </option>
        ))}
        </>
       : ""}
      </select>
    </div>
  );
}

export default DriverChoice;
