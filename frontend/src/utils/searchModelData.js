// IMPORT DATABANK
import listOfManufacturer from "../dataBank/listOfManufacturer.json";
import listOfDriver from "../dataBank/listOfDriver.json"
import teamCollection from "../dataBank/teamsLogos";

// IMPORT FUNCTION
import { DATABANK_SELECTION } from "./dataBankSelection"
import { dataOfCar } from "./searchCarData";

export const modelDataCompil =  (modelData) => {
  let manufacturerLogo

  const dataBank = DATABANK_SELECTION(modelData.season.toString());

  let driverChpt = {position: "Non classé", points:0}
  const driverChptData = dataBank.chpt_pilotes
  for (let i=0; i<driverChptData.length;i++) {
    if (driverChptData[i].driver === modelData.driver) {
      driverChpt.position = driverChptData[i].position
      driverChpt.points = driverChptData[i].points
      break
    }
  }

  let constructorChpt = {position: "Non classé", points:0}
  const constructorChptData = dataBank.chpt_constructeurs
  for (let i=0; i<constructorChptData.length;i++) {
    if (constructorChptData[i].team === modelData.team) {
      constructorChpt.position = constructorChptData[i].position
      constructorChpt.points = constructorChptData[i].points
      break
    }
  }

  let driverFlag =""
  let driverPicture=""
  for (let i=0; i<listOfDriver.length;i++) {
    if (listOfDriver[i].driver === modelData.driver) {
      driverFlag = listOfDriver[i].flag
      driverPicture = listOfDriver[i].picture
      break
    }
  }

  const carData = dataOfCar(modelData.model, modelData.season)

  const manufacurerDataBank = listOfManufacturer
  for (let i=0; i<manufacurerDataBank.length;i++){
    if (manufacurerDataBank[i].name === modelData.manufacturer) {
      manufacturerLogo = manufacurerDataBank[i].logo
      break
    }
  }

  let constructorLogo
  const constructorDataBank = teamCollection
  for (let i=0; i<constructorDataBank.length;i++){
    if (constructorDataBank[i].team === modelData.team) {
      constructorLogo=constructorDataBank[i].logo
      break
    }
  }

  let raceData
  let raceResult
  if (modelData.race !== "") {
    for (let i=0; i<dataBank.calendar.length;i++) {
      if (dataBank.calendar[i].race === modelData.race) {
        raceData=dataBank.calendar[i]
        break
      }
    }
    for (let i=0;i<raceData.subscript.length;i++) {
      if (raceData.subscript[i].driver === modelData.driver) {
        raceResult = {
          qualif: raceData.subscript[i].qualif,
          result: raceData.subscript[i].result,
          bestLap: raceData.subscript[i].bestLap
        }
      }
    }
  } else {
    raceData = {
      flag: "",
      track: "",
      trackPicture: "",
      distance:"",
      date:"",
    }
    raceResult = {
      qualif:{position:"", time:"", gap:""},
    result:{position:"", time:"", gap:""},
    bestLap:{position:"", time:"", gap:""},
    }
  }

  const reponse = {
    manufacturerLogo:manufacturerLogo,
    driverFlag:driverFlag,
    driverPicture: driverPicture,
    driverChpt:{position:driverChpt.position, points:driverChpt.points},
    constructorChpt:{position:constructorChpt.position, points:constructorChpt.points},
    raceFlag: raceData.flag,
    raceTrack: raceData.track,
    raceDate: raceData.date,
    raceDistance: raceData.distance,
    trackPicture: raceData.trackPicture,
    qualif: raceResult.qualif,
    result: raceResult.result,
    bestLap: raceResult.bestLap,
    engine: carData.engine,
    displacement:carData.displacement,
    accessories: carData.accessories,
    tyres: carData.tyres,
    designers: carData.designers,
    constructorLogo: constructorLogo
  }

  console.log(reponse);

return reponse






  
}

// function checkImg(){
// 	var tester=new Image()
// 	tester.onload=function() {alert('Image chargée')}
// 	tester.onerror=function() {alert('L\'image n\'existe pas')}
// 	tester.src="http://www.temp.com/image.jpg";
// 	tester.src="http://www.paris-360.com/admin/upload/tuilerie_neige hd.jpg";
// }