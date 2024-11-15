import React from "react";

//IMPORT COMPONENTS
import SmallCard from "../standardElements/SmallCard";

const HomeContainer = ({ latestModels }) => {
  return (
    <>
      <div className="titleBox">Les derniers modèles ajoutés :</div>
      <div className="fullLine">
      {latestModels !== undefined ? (
        latestModels.map((element) => <SmallCard element={element} key={element.modelCarsId} />)
      ) : (
        <span className="spinloader" />
      )}
      </div>
      <div className="titleBox">Les derniers messages :</div>
      <div className="titleBox">Les nouveaux utilisateurs :</div>
    </>
  );
};

export default HomeContainer;
