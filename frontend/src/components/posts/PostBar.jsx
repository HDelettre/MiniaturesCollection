import React from "react";
import PopupPostPicture from "../standardElements/PopupPostPicture";
import { ADD_POST_IMAGE, NEW_POST, UPDATE_POST } from "../../utils/postRequest";
import { ADD_NEW_IMAGE } from "../../utils/pictureCarRequest";

const PostBar = ({
  setPopupPostImage,
  popupPostImage,
  postData,
  postImageName,
  setPostImageName,
  postImageFile,
  setPostImageFile,
  setNewPost,
}) => {
  const addPictureHandle = () => {
    setPopupPostImage(true);
  };

  const postHandle = () => {
    (async () => {
      const fetchPost = await NEW_POST(postData);
      console.log("FETCHPOST : ", fetchPost)
      if (postImageFile) {
        const postId = fetchPost.data.postId;
        const bodyPicture = new FormData();
        bodyPicture.append("pictureName", postId);
        bodyPicture.append("postImageFile", postImageFile);
        const fetchPostImage = await ADD_POST_IMAGE(bodyPicture)
        console.log("FETCHPOSTIMAGE : ",fetchPostImage)
        // UPDATE PICTURENAME IN POST
        const bodyUpdate = {pictureName: fetchPostImage.data}
        const fetchUpdatePost = UPDATE_POST(bodyUpdate, postId)
        console.log("FETCH UPDATE POST : ", fetchUpdatePost)
      }
      setNewPost(false)
    })()
    
  };

  return (
    <>
      <div className="postBar">
        <span
          className="fa-solid fa-share"
          title="Envoyer votre message"
          onClick={postHandle}
        />
        <span
          className="fa-solid fa-image"
          title="Ajouter une image"
          onClick={addPictureHandle}
        />
      </div>
      {popupPostImage === true ? (
        <PopupPostPicture setPopupPostImage={setPopupPostImage}
        postImageName={postImageName}
        setPostImageName={setPostImageName}
        postImageFile={postImageFile}
        setPostImageFile={setPostImageFile}  />
      ) : (
        ""
      )}
    </>
  );
};

export default PostBar;
