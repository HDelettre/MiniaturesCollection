import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import LikeElement from "./LikeElement";

// IMPORT FUNCTIONS
import { DELETE_PICTURE } from "../../utils/pictureCarRequest";

const PictureBar = ({ element, userId, setIsLoadedModel, setMessageInfo }) => {
  const deleteHandle = () => {
    // CONFIRMATION
    (async () => {
      const deleteFiles = [element.pictureName];
      const fetchDelete = await DELETE_PICTURE(
        element.pictureCarsId,
        deleteFiles
      );
      console.log("REPONSE FETCH : ", fetchDelete);
      await setIsLoadedModel(false);
    })();
  };

  return (
    <div className="pictureBar">
      <LikeElement
        type={"picture"}
        data={element}
        userId={userId.toString()}
        setMessageInfo={setMessageInfo}
      />
      {element.userId === userId ? (
        <>
          <span
            className="fa-regular fa-trash-can"
            title="Supprimer la photo"
            style={{ color: "red" }}
            onClick={deleteHandle}
          />
          <span
            className="fa-regular fa-pen-to-square"
            title="Modifier la photo"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PictureBar;
