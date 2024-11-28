import React, { useState, useEffect } from "react";
import SmallCard from "../standardElements/SmallCard";

const SeasonContainer = ({ allModels, setModelSelected, setMenuIndex }) => {
  const [seasonLoaded, setSeasonLoaded] = useState(false);
  const [seasonList, setSeasonList] = useState([]);
  const [seasonSelect, setSeasonSelect] = useState("");
  const [carsListBySeason, setCarsListBySeason] = useState();

  if (seasonLoaded === false) {
    for (let i = 0; i < allModels.length; i++) {
      if (!seasonList.includes(allModels[i].season)) {
        setSeasonList((seasonList) => [...seasonList, allModels[i].season]);
      }
    }
    setSeasonLoaded(true);
  }

  const selectHandle = (e) => {
    setSeasonSelect(e.target.id);
    setCarsListBySeason(
      allModels.filter((model) => model.season == e.target.id)
    );
  };

  console.log("CARS : ", carsListBySeason);

  return seasonLoaded === true ? (
    <div className="bodyContainer" >
      {seasonSelect === "" ? (
        <>
          {seasonList.map((data) => (
            <div className="button" key={data} id={data} onClick={selectHandle}>
              {data}
            </div>
          ))}
        </>
      ) : (
        <>
          {carsListBySeason ? (
            <>
            <div className="titleBox">
              Les modèles de la saison {seasonSelect} dans la collection
            </div>
              {carsListBySeason.map((element) => (
                <SmallCard
                  key={element.modelCarsId}
                  element={element}
                  setMenuIndex={setMenuIndex}
                  setModelSelected={setModelSelected}
                />
              ))}
            </>
          ) : (
            <span className="spinloader" />
          )}
        </>
      )}
    </div>
  ) : (
    <span className="spinloader" />
  );
};

export default SeasonContainer;
