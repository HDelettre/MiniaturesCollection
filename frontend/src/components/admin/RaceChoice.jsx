import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import InputCase from "../standardElements/InputCase";

const RaceChoice = ({ season, dataBank, setRaceData, categorie }) => {
  const [raceList, setRaceList] = useState([]);
  let selectAccess = true;

  useEffect(() => {
    if (season && dataBank && categorie === "F1 with race") {
      const calendarData = dataBank.calendar;
      const calendarInfo = [];
      for (let i = 0; i < calendarData.length; i++) {
        const raceInfo = {
          name: calendarData[i].race,
          flag: calendarData[i].flag,
          trackName: calendarData[i].track,
          distance: calendarData[i].distance,
          date: calendarData[i].date,
          trackPicture: calendarData[i].trackPicture,
          subscript: calendarData[i].subscript,
        };
        calendarInfo.push(raceInfo);
      }
      setRaceList(calendarInfo);
    }
  }, [season, dataBank, categorie]);

  if (categorie === "F1 with race" && season && dataBank) {
    selectAccess = false;
  } else if (categorie === "Autres" && season) {
    selectAccess = false;
  }

  const selectHandle = async (e) => {
    const elmtIndex = document.getElementById("raceChoice");
    if (elmtIndex.selectedIndex > 0) {
      await setRaceData(raceList[elmtIndex.selectedIndex - 1]);
    } else {
      await setRaceData();
    }
  };

  return (
    <div className="choiceBox">
      <label className="labelBox">Choix de la course :</label>
      {categorie === "F1 with race" ? (
        <select
          className="optionBox"
          name="raceChoice"
          id="raceChoice"
          onChange={selectHandle}
          disabled={selectAccess}
        >
          <option name="choice" key="choice" id="choice">
            Sélectionner dans la liste
          </option>
          {dataBank && raceList.length > 0 ? (
            <>
              {raceList.map((data) => (
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
        <InputCase generalData={"RACE"} setGeneralData={setRaceData} selectAccess={selectAccess} />
      )}
    </div>
  );
};

export default RaceChoice;
