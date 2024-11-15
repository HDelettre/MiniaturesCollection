import React, { useState } from "react";

// IMPORT DataBank
import allDrivers from "../../dataBank/listOfDriver.json";

// IMPORT COMPONENTS
import InfoBox from "../standardElements/InfoBox";
import PictureBox from "../standardElements/PictureBox";

const DriverData = ({ driverData }) => {
  const pathDriverFile = `${process.env.REACT_APP_PICTURES}/drivers`;
  const [driverInfo, setDriverInfo] = useState();
  const [driverPicture, setDriverPicture] = useState(
    `${pathDriverFile}/defaultPicture.png`
  );
  const [driverFile, setDriverFile] = useState();

  if (!driverInfo) {
    if (driverData) {
      for (let i = 0; i < allDrivers.length; i++) {
        if (allDrivers[i].driver === driverData.name) {
          setDriverInfo(allDrivers[i]);
          break;
        }
      }
    }
  }

  return driverInfo ? (
    <div className="adminContainer_card">
      <div className="fullLine">
        <div className="fullLine">
          <h3>{driverData.name}</h3>
          <img
            className="smallFlag"
            src={`${process.env.REACT_APP_PICTURES}/flags/${driverData.country}`}
            alt={driverData.name}
          />
        </div>
        <PictureBox
          title={""}
          imageName={driverPicture}
          pathFile={pathDriverFile}
          setImageName={setDriverPicture}
          setImageFile={setDriverFile}
        />
      </div>
      <InfoBox title={"Date de naissance :"} data={driverInfo.dateOfBirthday} />
      <InfoBox title={"Date de décès :"} data={driverInfo.dateOfDeath} />
      <InfoBox title={"Grand Prix disputé :"} data={driverInfo.gpNumber} />
      <InfoBox title={"Victoire :"} data={driverInfo.victory} />
      <InfoBox title={"Nombre de podium :"} data={driverInfo.podium} />
      <InfoBox
        title={"Nombre de pole position :"}
        data={driverInfo.polePosition}
      />
      <InfoBox title={"Nombre de meilleur tour :"} data={driverInfo.bestLap} />
      <InfoBox title={"Champion du Monde :"} data={driverInfo.chpt} />
      <InfoBox title={"Points inscrits :"} data={driverInfo.points} />
      <InfoBox
        title={"Nombre de miniature :"}
        data={driverInfo.listOfModelCarId}
      />
    </div>
  ) : (
    <div className="adminContainer_card">
      <h3>DEFINIR LE PILOTE</h3>
    </div>
  );
};

export default DriverData;
