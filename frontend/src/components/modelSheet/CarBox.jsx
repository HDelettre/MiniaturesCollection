import React from 'react';

const CarBox = ({modelData, modelDataCompilation}) => {
  return (
    <div className="modelSheetCard">
          <h3>La voiture</h3>
          <div className="fullLine">
            Constructeur : {modelData.team}
            <img
              className="smallFlag"
              src={`${process.env.REACT_APP_PICTURES}/logos/${modelDataCompilation.constructorLogo}`}
              alt={modelData.team}
            />
          </div>
          <div className="fullLine">Moteur : {modelDataCompilation.engine}</div>
          <div className="fullLine">
            Cylindrée : {modelDataCompilation.displacement} cm3
          </div>
          <div className="fullLine">
            Type : {modelDataCompilation.acessories}
          </div>
          <div className="fullLine">Pneus : {modelDataCompilation.tyres}</div>
          {modelDataCompilation.designers.map((data) => (
            <div className="fullLine" key={data}>
              Designers :{data}
            </div>
          ))}

          {parseInt(modelData.season) > 1957 ? (
            <>
              <div className="fullLine">
                Championnat du Monde {modelData.season}
              </div>
              <div className="fullLine">
                {modelDataCompilation.constructorChpt.position} -{" "}
                {modelDataCompilation.constructorChpt.points} Pts
              </div>
            </>
          ) : (
            ""
          )}
        </div>

  );
}

export default CarBox;
