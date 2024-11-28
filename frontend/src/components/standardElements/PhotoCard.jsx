import React, { useState } from "react";

// IMPORT COMPONENT
import PictureBar from "./PictureBar";

const PhotoCard = ({
  element,
  modelData,
  userData,
  setIsLoadedModel,
  setMessageInfo,
}) => {
  const [legendText, setLegendText] = useState(
    `${modelData.model} - ${modelData.driver}`
  );

  return (
    <div className="smallCard">
      <div className="fullLine">
        <img
          src={`${process.env.REACT_APP_PICTURES}/modelCars/${element.pictureName}`}
          alt={`${modelData.model} : ${modelData.season}`}
        />
      </div>
      <div className="fullLine">
        <PictureBar
          element={element}
          userId={userData.userId}
          setIsLoadedModel={setIsLoadedModel}
          setMessageInfo={setMessageInfo}
        />
      </div>
      <div className="fullLine">{legendText}</div>
    </div>
  );
};

export default PhotoCard;
