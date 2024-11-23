import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import PopupAddPicture from "./PopupAddPicture";
import PopupEditModel from "../modelSheet/PopupEditModel";

// IMPORT FUNCTIONS
import { DELETE_MODEL, UPDATE_MODEL } from "../../utils/modelCarRequest";

const ModelBar = ({ modelData, setIsLoadedModel, pictureCollection, setMenuIndex, setModelsUpload }) => {
  const [formatLike, setFormatLike] = useState(false);
  const [likedBy, setLikedBy] = useState();
  const [likedByUser, setLikedByUser] = useState(false);
  const [likeUpdate, setLikeUpdate] = useState(false);
  const [addPicture, setAddPicture] = useState(false);
  const [editModel, setEditModel] = useState(false);

  const userId = "0035";

  if (formatLike === false) {
    if (modelData.LikedBy === null) {
      setLikedBy([]);
    } else {
      setLikedBy(modelData.LikedBy.split(","));
    }
    setFormatLike(true);
  }

  useEffect(() => {
    if (likedBy.includes(userId)) {
      setLikedByUser(true);
    } else {
      setLikedByUser(false);
    }
  }, [likedBy]);

  useEffect(() => {
    if (likeUpdate === true) {
      (async () => {
        const bodyUpdate = { LikedBy: likedBy.toString() };
        const fetchUpdateModel = await UPDATE_MODEL(
          bodyUpdate,
          modelData.modelCarsId
        );
        console.log("FETCH REPONSE : ", fetchUpdateModel);
        setLikeUpdate(false);
      })();
    }
  }, [likeUpdate]);

  const likeHandle = async () => {
    if (likedByUser === false) {
      setLikedBy((likedBy) => [...likedBy, userId]);
    } else {
      const likeFilter = likedBy.filter((element) => element !== userId);
      setLikedBy(likeFilter);
    }
    setLikeUpdate(true);
  };

  const pictureHandle = () => {
    if (addPicture === true) {
      setAddPicture(false);
    } else {
      setAddPicture(true);
    }
  };

  const editHandle = () => {
     setEditModel(true)
  }

  const deleteHandle = () => {
    // CONFIRMATION

    
    (async () => {
      const deleteFiles = []
      pictureCollection.map((data) => deleteFiles.push(data.pictureName))
      const fetchDelete = await DELETE_MODEL(modelData.modelCarsId, deleteFiles)
      console.log("REPONSE FETCH : ", fetchDelete);
      await setModelsUpload(false)
      await setMenuIndex("home")
    })()
  }

  return formatLike === true ? (
    <>
      <div className="pictureBar">
        <span
          className="fa-regular fa-trash-can"
          title="Supprimer la miniature"
          onClick={deleteHandle}
          style={{ color: "red" }}
        />
        <span className="fa-regular fa-pen-to-square" title="Mettre à jour" onClick={editHandle} />
        <span
          className="fa-solid fa-camera"
          title="Ajouter une photo"
          onClick={pictureHandle}
        />
        <>
          <span
            className={
              likedByUser === true ? "fa-solid fa-heart" : "fa-regular fa-heart"
            }
            title="J'aime cette miniature"
            onClick={likeHandle}
          >
            {`  ${likedBy.length}`}{" "}
          </span>
        </>
      </div>

      {addPicture === true ? <PopupAddPicture modelData={modelData} setIsLoadedModel={setIsLoadedModel} setAddPicture={setAddPicture} /> : ""}

      {editModel === true ? <PopupEditModel modelData={modelData} setIsLoadedModel={setIsLoadedModel} setEditModel={setEditModel} /> : ""}
    </>
  ) : (
    <span className="spinloader" />
  );
};

export default ModelBar;
