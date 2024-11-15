import React from 'react';

const InsertPictureButton = ({setPictureName, setPictureFile}) => {

const selectHandle=(e)=>{
  setPictureName(URL.createObjectURL(e.target.files[0]));
    setPictureFile(e.target.files[0]);
}

  return (
    <div className='pictureButton'>
      <input className='pictureButton_file' type="file"
            name="modelImage"
            title="modelImage"
            id="modelImage"
            accept=".jpg, .jpeg, .png"
            onChange={selectHandle}/>
      <span className='fa-regular fa-image'/>
    </div>
  );
}

export default InsertPictureButton;
