import React from 'react';

const RaceResult = ({modelDataCompilation}) => {
  return (
    <div className="modelSheetContainer">
          <div className="modelSheetSmallCard">
            <h3>Qualifications</h3>
            <div className="fullLine">
              Position : {modelDataCompilation.qualif[0].position}{" "}
            </div>
            <div className="fullLine">
              Temps : {modelDataCompilation.qualif[0].time}{" "}
            </div>
            <div className="fullLine">
              Ecart : {modelDataCompilation.qualif[0].gap}{" "}
            </div>
          </div>
          <div className="modelSheetSmallCard">
            <h3>Résultat</h3>
            <div className="fullLine">
              Position : {modelDataCompilation.result[0].position}{" "}
            </div>
            <div className="fullLine">
              Temps : {modelDataCompilation.result[0].time}{" "}
            </div>
            <div className="fullLine">
              Ecart : {modelDataCompilation.result[0].gap}{" "}
            </div>
          </div>
          <div className="modelSheetSmallCard">
            <h3>Meilleur tour</h3>
            <div className="fullLine">
              Position : {modelDataCompilation.bestLap[0].position}{" "}
            </div>
            <div className="fullLine">
              Temps : {modelDataCompilation.bestLap[0].time}{" "}
            </div>
            <div className="fullLine">
              Ecart : {modelDataCompilation.bestLap[0].gap}{" "}
            </div>
          </div>
        </div>
  );
}

export default RaceResult;
