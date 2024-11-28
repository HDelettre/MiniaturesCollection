import React from "react";
import LikeElement from "../standardElements/LikeElement";

const PostMessageBar = ({ postUserData, data, userData }) => {
  return (
    <div className="postMessageBar">
      <LikeElement type={"post"} data={data} userId={userData.userId.toString()} />
      <span
        className="fa-solid fa-reply smallIcon"
        title="Répondre au message"
      />
      {userData.userId === postUserData.userId ? (
        <>
          <span
            className="fa-regular fa-pen-to-square smallIcon"
            title="Modifier le message"
          />
          <span
            className="fa-regular fa-trash-can smallIcon"
            title="Supprimer le message"
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PostMessageBar;
