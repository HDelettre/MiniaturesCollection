import React, { useEffect, useState } from "react";

//IMPORT COMPONENTS
import SmallCard from "../standardElements/SmallCard";
import PostContainer from "../posts/PostContainer";

const HomeContainer = ({
  latestModels,
  setModelSelected,
  setMenuIndex,
  allPosts,
  userData,
}) => {

  const [latestPosts, setLatestPosts] = useState();
  useEffect(() => {
    if (allPosts && latestPosts === undefined) {
      setLatestPosts(allPosts.slice(-3));
    }
  }, [allPosts]);
  return (
    <>
      <div className="titleBox">Les derniers modèles ajoutés :</div>
      <div className="fullLine">
        {latestModels !== undefined ? (
          latestModels.map((element) => (
            <SmallCard
              element={element}
              key={element.modelCarsId}
              setModelSelected={setModelSelected}
              setMenuIndex={setMenuIndex}
            />
          ))
        ) : (
          <span className="spinloader" />
        )}
      </div>
      <div className="titleBox">Les derniers messages :</div>
      {latestPosts !== undefined ? (
        latestPosts.map((data) => (
          <PostContainer data={data} key={data.postId} userData={userData}  />
        ))
      ) : (
        <span className="spinloader" />
      )}
      <div className="titleBox">Les nouveaux utilisateurs :</div>
    </>
  );
};

export default HomeContainer;
