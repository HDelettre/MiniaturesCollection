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

// IMPORT FUNCTIONS
import { GET_ALL_MODELS } from "./utils/modelCarRequest";
import ModelSheetContainer from "./components/modelSheet/ModelSheetContainer";

function App() {
  const [menuIndex, setMenuIndex] = useState("home");
  const [allModels, setAllModels] = useState();
  const [modelsUpload, setModelsUpload] = useState(false);
  const [latestModels, setLatestModels] = useState();
  const [modelSelected, setModelSelected] = useState()

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

  console.log("MODEL SELECTED : ", modelSelected)

  return (
    <div className="appContainer">
      <Header />
      <NavigationBar setMenuIndex={setMenuIndex} menuIndex={menuIndex} />
      {menuIndex === "home" ? (
        <HomeContainer latestModels={latestModels} setModelSelected={setModelSelected} setMenuIndex={setMenuIndex} />
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
      {menuIndex === "modelSheet" ? <ModelSheetContainer modelCarsId={modelSelected} /> : "" }
    </div>
  );
}

export default App;
