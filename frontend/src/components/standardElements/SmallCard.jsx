import React, { useEffect, useState } from "react";
import { GET_ONE_PICTURE } from "../../utils/pictureCarRequest";

const SmallCard = ({ element, setModelSelected, setMenuIndex }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [modelPicture, setModelPicture] = useState("defaultPicture.png");

  useEffect(() => {
    if (isLoaded === false) {
      (async () => {
        const fetchReponse = await GET_ONE_PICTURE(element.modelCarsId);
        console.log("FETCH : ", fetchReponse)
        if (fetchReponse.status === 200) {
          setModelPicture(fetchReponse.data.pictureName);
        }
        setIsLoaded(true);
      })();
    }
  }, [modelPicture, isLoaded]);

  const selectHandle = async (e) => {
    await setModelSelected(e.target.id)
    await setMenuIndex("modelSheet")
  }

  return isLoaded === true ? (
    <div className="smallCard" id={element.modelCarsId} onClick={selectHandle}>
      <div className="fullLine" >
        <img
          src={`${process.env.REACT_APP_PICTURES}/modelCars/${modelPicture}`}
          alt={`${element.model} : ${element.season}`}
          id={element.modelCarsId}
        />
      </div>
      <div className="fullLine" id={element.modelCarsId}>
        {element.model} : {element.season}
      </div>
      <div className="fullLine" id={element.modelCarsId}>
        {element.driver} - {element.race}
      </div>
    </div>
  ) : (
    <span className="spinloader" />
  );
};

export default SmallCard;