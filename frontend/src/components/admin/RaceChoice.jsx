import React, {useEffect, useState} from 'react';

const RaceChoice = ({season, dataBank, setRaceData}) => {
  const [raceList, setRaceList] = useState([])

  useEffect(() => {
    if (season && dataBank) {
      const calendarData = dataBank.calendar;
      const calendarInfo = []
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
        calendarInfo.push(raceInfo)
      }
      setRaceList(calendarInfo);
    }
  }, [season, dataBank]);

  const selectHandle = async (e) => {
    const elmtIndex = document.getElementById("race");
    if (elmtIndex.selectedIndex > 0) {
      await setRaceData(raceList[elmtIndex.selectedIndex - 1]);
    }
  };

  return RaceChoice ? (
    <div className="choiceBox">
      <label className="labelBox">Choix de la course :</label>
      <select
        className="optionBox"
        name="race"
        id="race"
        onChange={selectHandle}
      >
        <option name="choice" key="choice" id="choice">
          Sélectionner dans la liste
        </option>
        {dataBank !== "" && raceList.length > 0 ?
        <>
        {raceList.map((data) => (
          <option name={data.name} key={data.name} id={data.name}>
          {data.name}
          </option>
        ))}
        </>
       : ("")}
      </select>
    </div>
  ) : (
    <span className='spinloader'/>
  );
}

export default RaceChoice;
