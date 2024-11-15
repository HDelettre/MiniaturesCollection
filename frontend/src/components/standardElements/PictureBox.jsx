import React from "react";

// IMPORT COMPONENTS
import InsertPictureButton from "../commands/InsertPictureButton";

const PictureBox = ({title, imageName, pathFile, setImageName, setImageFile }) => {

  const deleteHandle = () => {
    setImageName(`${pathFile}/defaultPicture.png`)
    setImageFile("")
  }

  return (
    <div className="fullBox">
      <div className="fullLine">{title}</div>
      <img
        className="trackPicture"
        src={`${imageName}`}
        alt={imageName}
      />
      <div className="fullLine">
        <InsertPictureButton
          setPictureName={setImageName}
          setPictureFile={setImageFile}
        />
        <span className="fa-solid fa-trash" onClick={deleteHandle} />
      </div>
    </div>
  );
};

export default PictureBox;
