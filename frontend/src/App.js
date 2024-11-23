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

// IMPORT FUNCTIONS
import { GET_ALL_MODELS } from "./utils/modelCarRequest";

function App() {
  const [menuIndex, setMenuIndex] = useState("home");
  const [userData, setUserData] = useState()
  const [allModels, setAllModels] = useState();
  const [modelsUpload, setModelsUpload] = useState(false);
  const [latestModels, setLatestModels] = useState();
  const [modelSelected, setModelSelected] = useState();

  useEffect(() => {
    if (modelsUpload === false) {
      (async () => {
        const allModelRequest = await GET_ALL_MODELS();
        setAllModels(allModelRequest.data);
        setLatestModels(allModelRequest.data.slice(-5));
        setModelsUpload(true);
      })();
    }
  }, [modelsUpload]);

  return (
    <div className="appContainer">
      <Header userData={userData} setUserData={setUserData} />
      <NavigationBar setMenuIndex={setMenuIndex} menuIndex={menuIndex} userData={userData} />
      {menuIndex === "home" ? (
        <HomeContainer
          latestModels={latestModels}
          setModelSelected={setModelSelected}
          setMenuIndex={setMenuIndex}
        />
      ) : (
        ""
      )}
      {menuIndex === "season" ? <SeasonContainer /> : ""}
      {menuIndex === "team" ? <TeamContainer /> : ""}
      {menuIndex === "driver" ? <DriversContainer /> : ""}
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
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
