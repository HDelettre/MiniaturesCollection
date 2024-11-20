import React from 'react';

// IMPORT COMPONENTS
import PhotoCard from '../standardElements/PhotoCard';
import PictureBar from '../standardElements/PictureBar';

const GalleriePhoto = ({pictureCollection, modelData}) => {
  return (
    <>
    <div className="titleBox">Gallerie photo :</div>
    <div className='modelSheetContainer'>
      {pictureCollection.map((element) => <PhotoCard element={element} modelData={modelData} /> )}
    </div>
    </>
  );
}

export default GalleriePhoto;
