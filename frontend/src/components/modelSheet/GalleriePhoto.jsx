import React from "react";

// IMPORT COMPONENTS
import PhotoCard from "../standardElements/PhotoCard";

const GalleriePhoto = ({
  pictureCollection,
  modelData,
  userData,
  setIsLoadedModel,
  setMessageInfo,
}) => {
  return (
    <>
      <div className="titleBox">Gallerie photo :</div>
      <div className="modelSheetContainer">
        {pictureCollection.map((element) => (
          <PhotoCard
            element={element}
            modelData={modelData}
            key={element.pictureCarsId}
            userData={userData}
            setIsLoadedModel={setIsLoadedModel}
            setMessageInfo={setMessageInfo}
          />
        ))}
      </div>
    </>
  );
};

export default GalleriePhoto;
