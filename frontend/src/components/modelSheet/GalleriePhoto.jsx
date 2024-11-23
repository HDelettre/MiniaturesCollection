import React from 'react';

// IMPORT COMPONENTS
import PhotoCard from '../standardElements/PhotoCard';

const GalleriePhoto = ({pictureCollection, modelData}) => {
  return (
    <>
    <div className="titleBox">Gallerie photo :</div>
    <div className='modelSheetContainer'>
      {pictureCollection.map((element) => <PhotoCard element={element} modelData={modelData} key={element.pictureCarsId} /> )}
    </div>
    </>
  );
}

export default GalleriePhoto;
