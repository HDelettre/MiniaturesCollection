import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import PictureBox from "./PictureBox";

const PopupPostPicture = ({
  setPopupPostImage,
  postImageName,
  setPostImageName,
  postImageFile,
  setPostImageFile,
}) => {
  const pathFile = `${process.env.REACT_APP_PICTURES}/posts/`;
  useEffect(() => {
    if (!postImageFile) {setPostImageName(pathFile + "defaultPicture.png")}
  }, [postImageFile]);

  const validPictHandle = (e) => {
    if (e.target.id === "annuler") {
      setPopupPostImage(false);
    }
    
    setPopupPostImage(false);
  };

  return (
    <div className="popupPicture">
      <PictureBox
        title={""}
        setImageFile={setPostImageFile}
        setImageName={setPostImageName}
        imageName={postImageName}
        pathFile={pathFile}
      />
      <div className="fullLine">
        <div className="button" id="valider" onClick={validPictHandle}>
          VALIDER
        </div>
        <div className="button" id="annuler" onClick={validPictHandle}>
          ANNULER
        </div>
      </div>
    </div>
  );
};

export default PopupPostPicture;
