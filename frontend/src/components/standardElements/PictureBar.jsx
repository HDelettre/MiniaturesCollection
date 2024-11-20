import React from 'react';

const PictureBar = () => {
  const likeNumber = 10
  return (
    <div className='pictureBar'>
      <span className='fa-regular fa-trash-can' title='Supprimer la photo' style={{"color":"red"}} />
      <span className='fa-regular fa-pen-to-square' title='Modifier la photo' />
      <>
      <span className='fa-regular fa-heart' title="J'aime cette photo">{`  ${likeNumber}`}  </span> 
      
      </>
    </div>
  );
}

export default PictureBar;
