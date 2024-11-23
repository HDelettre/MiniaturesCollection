import React, { useEffect, useState } from "react";

// IMPORT COMPONENTS
import GalleriePhoto from "./GalleriePhoto";
import MiniatureBox from "./MiniatureBox";
import RaceBox from "./RaceBox";
import DriverBox from "./DriverBox";
import CarBox from "./CarBox";
import RaceResult from "./RaceResult";

// IMPORT FUNCTIONS
import { GET_ONE_MODEL } from "../../utils/modelCarRequest";
import { GET_ALL_PICTURE } from "../../utils/pictureCarRequest";
import { modelDataCompil } from "../../utils/searchModelData";

const ModelSheetContainer = ({
  modelCarsId,
  setMenuIndex,
  setModelsUpload,
}) => {
  const [isLoadedModel, setIsLoadedModel] = useState(false);
  const [modelData, setModelData] = useState();
  const [modelDataCompilation, setModelDataCompilation] = useState();
  const [pictureCollection, setPictureCollection] = useState();

  useEffect(() => {
    if (isLoadedModel === false) {
      (async () => {
        const fetchReponse = await GET_ONE_MODEL(modelCarsId);
        const fetchPictures = await GET_ALL_PICTURE(modelCarsId);
        setModelData(fetchReponse.data);
        setModelDataCompilation(modelDataCompil(fetchReponse.data));
        setPictureCollection(fetchPictures.data);
        if (modelData && modelDataCompilation) {
          setIsLoadedModel(true);
        }
      })();
    }
  }, [isLoadedModel, modelCarsId, modelData, modelDataCompilation]);

  return isLoadedModel === true ? (
    <div className="displayContainer">
      <div className="modelSheetTitleBox">
        <h2>
          {modelData.model} - {modelData.driver} - {modelData.race}{" "}
          {modelData.season}
        </h2>
        <img
          className="imageTitle"
          src={`${process.env.REACT_APP_MODELCAR_IMAGE}/${modelData.imageName}`}
          alt={modelData.model}
        />
      </div>
      <div className="modelSheetContainer">
        <MiniatureBox
          pictureCollection={pictureCollection}
          modelData={modelData}
          modelDataCompilation={modelDataCompilation}
          setIsLoadedModel={setIsLoadedModel}
          setMenuIndex={setMenuIndex}
          setModelsUpload={setModelsUpload}
        />
        {modelData.race !== "" ? (
          <RaceBox
            modelData={modelData}
            modelDataCompilation={modelDataCompilation}
          />
        ) : (
          ""
        )}
        <DriverBox
          modelData={modelData}
          modelDataCompilation={modelDataCompilation}
        />
        <CarBox
          modelData={modelData}
          modelDataCompilation={modelDataCompilation}
        />
      </div>
      {modelData.race !== "" ? (
        <RaceResult modelDataCompilation={modelDataCompilation} />
      ) : (
        ""
      )}
      <GalleriePhoto
        pictureCollection={pictureCollection}
        modelData={modelData}
      />
      <div className="titleBox">Commentaires :</div>
    </div>
  ) : (
    <span className="spinloader" />
  );
};

export default ModelSheetContainer;
