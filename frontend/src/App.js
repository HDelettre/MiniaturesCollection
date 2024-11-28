// IMPORT COMPONENTS
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Header from "./components/headerAndFooter/Header";
import NavigationBar from "./components/navigation/NavigationBar";
import HomeContainer from "./components/home/HomeContainer";
import DriversContainer from "./components/drivers/DriversContainer";
import SeasonContainer from "./components/seasons/SeasonContainer";
import TeamContainer from "./components/teams/TeamContainer";
import AddNewCar from "./components/admin/AddNewCar";
import ModelSheetContainer from "./components/modelSheet/ModelSheetContainer";
import MessageBox from "./components/standardElements/MessageBox";
import RacesContainer from "./components/races/RacesContainer";

// IMPORT FUNCTIONS
import { GET_ALL_MODELS } from "./utils/modelCarRequest";
import { GET_ALL_POST } from "./utils/postRequest";
import { GET_ALL_USERS } from "./utils/userRequest";

function App() {
  const defaultUser = { userId: "0000", fonction: "VISITOR" };
  const [menuIndex, setMenuIndex] = useState("home");
  const [userData, setUserData] = useState(defaultUser);
  const [allModels, setAllModels] = useState();
  const [modelsUpload, setModelsUpload] = useState(false);
  const [latestModels, setLatestModels] = useState();
  const [modelSelected, setModelSelected] = useState();
  const [allPosts, setAllPosts] = useState();
  const [allPostsLoading, setAllPostsLoading] = useState(false);
  const [allUsers, setAllUsers] = useState();
  const [allUsersLoading, setAllUsersLoading] = useState(false);
  const [messageInfo, setMessageInfo] = useState("");

  useEffect(() => {
    if (modelsUpload === false) {
      (async () => {
        const allModelRequest = await GET_ALL_MODELS();
        if (allModelRequest.status === 200) {
          setAllModels(allModelRequest.data);
          setLatestModels(allModelRequest.data.slice(-5));
          setModelsUpload(true);
        }
      })();
    }
  }, [modelsUpload]);

  useEffect(() => {
    if (allPostsLoading === false) {
      (async () => {
        const fetchAllPosts = await GET_ALL_POST();
        if (fetchAllPosts.status === 200) {
          setAllPosts(fetchAllPosts.data);
          setAllPostsLoading(true);
        }
      })();
    }
  }, [allPostsLoading]);

  useEffect(() => {
    if (allUsersLoading === false) {
      (async () => {
        const fetchAllUsers = await GET_ALL_USERS();
        if (fetchAllUsers.status === 200) {
          setAllUsers(fetchAllUsers.data);
          setAllUsersLoading(true);
        }
      })();
    }
  }, [allUsersLoading]);

  return (
    <div className="appContainer">
      <Header
        userData={userData}
        setUserData={setUserData}
        defaultUser={defaultUser}
        setMessageInfo={setMessageInfo}
      />
      <NavigationBar
        setMenuIndex={setMenuIndex}
        menuIndex={menuIndex}
        userData={userData}
      />
      {menuIndex === "home" ? (
        <HomeContainer
          latestModels={latestModels}
          allPosts={allPosts}
          setModelSelected={setModelSelected}
          setMenuIndex={setMenuIndex}
          userData={userData}
        />
      ) : (
        ""
      )}
      {menuIndex === "season" ? (
        <SeasonContainer
          allModels={allModels}
          setModelSelected={setModelSelected}
          setMenuIndex={setMenuIndex}
        />
      ) : (
        ""
      )}
      {menuIndex === "team" ? <TeamContainer
      allModels={allModels}
      setModelSelected={setModelSelected}
      setMenuIndex={setMenuIndex}
       /> : ""}
      {menuIndex === "driver" ? <DriversContainer /> : ""}
      {menuIndex === "race" ? <RacesContainer /> : ""}
      {menuIndex === "admin" ? (
        <AddNewCar
          setMenuIndex={setMenuIndex}
          setModelsUpload={setModelsUpload}
        />
      ) : (
        ""
      )}
      {menuIndex === "modelSheet" ? (
        <ModelSheetContainer
          modelCarsId={modelSelected}
          setMenuIndex={setMenuIndex}
          setModelsUpload={setModelsUpload}
          userData={userData}
          allPosts={allPosts}
          setMessageInfo={setMessageInfo}
        />
      ) : (
        ""
      )}
      {messageInfo !== "" ? <MessageBox messageInfo={messageInfo} setMessageInfo={setMessageInfo} /> : ""}
    </div>
  );
}

export default App;
