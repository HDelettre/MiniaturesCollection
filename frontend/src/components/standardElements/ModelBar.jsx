import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import PopupAddPicture from "./PopupAddPicture";
import PopupEditModel from "../modelSheet/PopupEditModel";

// IMPORT FUNCTIONS
import { DELETE_MODEL, UPDATE_MODEL } from "../../utils/modelCarRequest";
import LikeElement from "./LikeElement";

const ModelBar = ({
  modelData,
  setIsLoadedModel,
  pictureCollection,
  setMenuIndex,
  setModelsUpload,
  userId,
  setMessageInfo,
}) => {
  const [addPicture, setAddPicture] = useState(false);
  const [editModel, setEditModel] = useState(false);

  const pictureHandle = () => {
    if (addPicture === true) {
      setAddPicture(false);
    } else {
      setAddPicture(true);
    }
  };

  const editHandle = () => {
    setEditModel(true);
  };

  const deleteHandle = () => {
    // CONFIRMATION

    (async () => {
      const deleteFiles = [];
      pictureCollection.map((data) => deleteFiles.push(data.pictureName));
      const fetchDelete = await DELETE_MODEL(
        modelData.modelCarsId,
        deleteFiles
      );
      console.log("REPONSE FETCH : ", fetchDelete);
      await setModelsUpload(false);
      await setMenuIndex("home");
    })();
  };

  return (
    <>
      <div className="pictureBar">
        <LikeElement
          type={"model"}
          data={modelData}
          userId={userId.toString()}
          setMessageInfo={setMessageInfo}
        />
        {userId === modelData.userId ? (
          <>
            <span
              className="fa-regular fa-trash-can"
              title="Supprimer la miniature"
              onClick={deleteHandle}
              style={{ color: "red" }}
            />
            <span
              className="fa-regular fa-pen-to-square"
              title="Mettre à jour"
              onClick={editHandle}
            />
            <span
              className="fa-solid fa-camera"
              title="Ajouter une photo"
              onClick={pictureHandle}
            />
          </>
        ) : (
          ""
        )}
      </div>

      {addPicture === true ? (
        <PopupAddPicture
          modelData={modelData}
          setIsLoadedModel={setIsLoadedModel}
          setAddPicture={setAddPicture}
        />
      ) : (
        ""
      )}

      {editModel === true ? (
        <PopupEditModel
          modelData={modelData}
          setIsLoadedModel={setIsLoadedModel}
          setEditModel={setEditModel}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ModelBar;
