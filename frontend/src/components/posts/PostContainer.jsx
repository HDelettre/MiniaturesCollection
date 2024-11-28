import React, { useEffect, useState } from 'react';

// IMPORT COMPONENTS
import PostMessageBar from './PostMessageBar';

// IMPORT FUNCTIONS
import { GET_ONE_USER } from '../../utils/userRequest';
import { GET_ONE_MODEL } from '../../utils/modelCarRequest';
import { dateForm, timeOnly } from '../../utils/dateFormat';

const PostContainer = ({data, userData}) => {
  const [postDataLoaded, setPostDataLoaded] = useState(false);
  const [postUserData, setPostUserData] = useState("");
  const [postModelData, setPostModelData] = useState("");

  useEffect(() => {
    if (postDataLoaded === false) {
      (async () => {
        const fetchGetUser = await GET_ONE_USER(data.userId);
        if (fetchGetUser.status === 200) {setPostUserData(fetchGetUser.data)}
        const fetchGetModel = await GET_ONE_MODEL(data.modelCarsId);
        if (fetchGetModel.status === 200) {setPostModelData(fetchGetModel.data)}
        setPostDataLoaded(true)
      })();
    }
  }, [data, postDataLoaded]);

  return postDataLoaded === true ? (
    <div className='postContainer'>
      {userData.userId !== "0000" ?
      <PostMessageBar postUserData={postUserData} data={data} userData={userData} />
    :""}
      <div className='postContainer_info'>
        <div>{`Message de ${postUserData.pseudo}`}</div>
        <div>{dateForm(data.createdAt)} : {timeOnly(data.createdAt)}</div>
        <div>{`Sur ${postModelData.model} - ${postModelData.driver}`}</div>
      </div>
      <div className='postContainer_texte'>
        <p>
        {data.message}
        </p>
      </div>
      {data.pictureName !== "" ?
      <div className='postContainer_image'>
        <img src={`${process.env.REACT_APP_PICTURES}/posts/${data.pictureName}`} alt="" />
      </div>
       : <div className='postContainer_image'></div>}
    </div>
  ) : (
    <span className='spinloader' />
  );
}

export default PostContainer;
