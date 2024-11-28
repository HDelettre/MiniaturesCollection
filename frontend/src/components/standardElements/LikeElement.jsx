import React, { useEffect, useState } from "react";

// IMPORT FUNCTIONS
import { UPDATE_PICTURE } from "../../utils/pictureCarRequest";
import { UPDATE_POST } from "../../utils/postRequest";
import { UPDATE_MODEL } from "../../utils/modelCarRequest";

const LikeElement = ({ type, data, userId, setMessageInfo }) => {
  const [formatLike, setFormatLike] = useState(false);
  const [likedBy, setLikedBy] = useState();
  const [likedByUser, setLikedByUser] = useState(false);
  const [likeUpdate, setLikeUpdate] = useState(false);
  const [classType, setClassType] = useState("fa-regular");

  if (formatLike === false) {
    if (data.LikedBy === null || data.LikedBy === "") {
      setLikedBy([]);
    } else {
      setLikedBy(data.LikedBy.split(","));
    }
    setFormatLike(true);
  }

  const likeHandle = async () => {
    if (userId === "0000") {
      setMessageInfo("Vous devez vous connecter pour pouvoir Liké !");
    } else {
      if (likedByUser === false) {
        setLikedBy((likedBy) => [...likedBy, userId]);
      } else {
        const likeFilter = await likedBy.filter(
          (element) => element !== userId
        );
        setLikedBy(likeFilter);
      }
      setLikeUpdate(true);
    }
  };

  useEffect(() => {
    if (likedBy.includes(userId)) {
      setLikedByUser(true);
      setClassType("fa-solid");
    } else {
      setLikedByUser(false);
      setClassType("fa-regular");
    }
  }, [likedBy]);

  useEffect(() => {
    if (likeUpdate === true) {
      (async () => {
        const bodyUpdate = { LikedBy: likedBy.toString() };
        if (type === "model") {
          const fetchUpdateLike = await UPDATE_MODEL(
            bodyUpdate,
            data.modelCarsId
          );
          console.log("FETCH REPONSE : ", fetchUpdateLike);
        }
        if (type === "picture") {
          const fetchUpdateLike = await UPDATE_PICTURE(
            bodyUpdate,
            data.pictureId
          );
          console.log("FETCH REPONSE : ", fetchUpdateLike);
        }
        if (type === "post") {
          const fetchUpdateLike = await UPDATE_POST(bodyUpdate, data.postId);
          console.log("FETCH REPONSE : ", fetchUpdateLike);
        }
        setLikeUpdate(false);
      })();
    }
  }, [likeUpdate]);

  return formatLike ? (
    <div className="likeBox">
      <div className="fullLine">
        {type === "post" ? (
          <span
            className={`${classType} fa-thumbs-up smallIcon`}
            title="J'aime"
            onClick={likeHandle}
          />
        ) : (
          <span
            className={`${classType} fa-heart smallIcon`}
            title="J'aime"
            onClick={likeHandle}
          />
        )}
        <div className="likeBox_valeur">{likedBy.length}</div>
      </div>
    </div>
  ) : (
    <span className="spinloader" />
  );
};

export default LikeElement;
