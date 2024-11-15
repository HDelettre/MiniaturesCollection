// IMPORT COMPONENTS
import React, { useState, useEffect } from "react";

// IMPORT COMPONENTS
import Header from "./components/headerAndFooter/Header";
import NavigationBar from "./components/navigation/NavigationBar";
import HomeContainer from "./components/home/HomeContainer";
import AdminContainerA from "./components/admin/AdminContainer_A";
import DriversContainer from "./components/drivers/DriversContainer";
import SeasonContainer from "./components/seasons/SeasonContainer";
import TeamContainer from "./components/teams/TeamContainer";

// IMPORT FUNCTIONS
import { GET_ALL_MODELS } from "./utils/modelCarRequest";

function App() {
  const [menuIndex, setMenuIndex] = useState("home");
  const [allModels, setAllModels] = useState();
  const [modelsUpload, setModelsUpload] = useState(false);
  const [latestModels, setLatestModels] = useState();

  useEffect(() => {
    if (modelsUpload === false) {
      (async () => {
        const allModelRequest = await GET_ALL_MODELS();
        setAllModels(allModelRequest.data)
        setLatestModels(allModelRequest.data.slice(-5))
        setModelsUpload(true)
      })();
    }
  }, [modelsUpload]);

  return (
    <div className="appContainer">
      <Header />
      <NavigationBar setMenuIndex={setMenuIndex} menuIndex={menuIndex} />
      {menuIndex === "home" ? <HomeContainer latestModels={latestModels} /> : ""}
      {menuIndex === "season" ? <SeasonContainer /> : ""}
      {menuIndex === "team" ? <TeamContainer /> : ""}
      {menuIndex === "driver" ? <DriversContainer /> : ""}
      {menuIndex === "admin" ? <AdminContainerA /> : ""}
    </div>
  );
}

export default App;
