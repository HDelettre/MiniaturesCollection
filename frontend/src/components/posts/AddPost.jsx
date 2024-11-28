import React, { useState, useEffect } from "react";
import PostContainer from "./PostContainer";
import PictureBox from "../standardElements/PictureBox";
import PostBar from "./PostBar";

const AddPost = ({ setNewPost, userData, modelData }) => {
  const [text, setText] = useState();
  const [popupPostImage, setPopupPostImage] = useState(false);
  const [postData, setPostData] = useState();
  const [postImageName, setPostImageName] = useState("");
  const [postImageFile, setPostImageFile] = useState();

  const cancelHandle = () => {
    setNewPost(false);
  };

  const texteHandle = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setPostData({
      userId: userData.userId,
      modelCarsId: modelData.modelCarsId,
      message: text,
      pictureName: postImageName,
    });
  }, [text, userData, modelData, postImageName]);

  return (
    <div className="postBloc">
      <div className="fullLine">
        <h3>Votre commentaire</h3>
        <span
          className="fa-solid fa-square-xmark"
          style={{ color: "red", cursor: "pointer" }}
          onClick={cancelHandle}
        />
      </div>
      <div className="postContainer">
        <div className="postContainer_info">
          <div>Message de : {userData.pseudo}</div>
          <div>
            Sujet : {modelData.model} / {modelData.driver}
          </div>
        </div>

        <textarea
          className="postContainer_texte"
          rows={5}
          onChange={texteHandle}
        >
          {text}
        </textarea>

        {postImageFile ? (<>
        <div className="postContainer_image">
        <img src={postImageName} alt="" />
        </div>
        </>) : ""}

        <PostBar
          setPopupPostImage={setPopupPostImage}
          popupPostImage={popupPostImage}
          postData={postData}
          postImageName={postImageName}
          setPostImageName={setPostImageName}
          postImageFile={postImageFile}
          setPostImageFile={setPostImageFile}
          setNewPost={setNewPost}
        />
      </div>
    </div>
  );
};

export default AddPost;
