import React from 'react';

const ModelBar = () => {
  const likeNumber = 10
  return (
    <div className='pictureBar'>
      <span className='fa-regular fa-trash-can' title='Supprimer la miniature' style={{"color":"red"}} />
      <span className='fa-regular fa-pen-to-square' title='Mettre à jour' />
      <span className='fa-solid fa-camera' title='Ajouter une photo' />
      <>
      <span className='fa-regular fa-heart' title="J'aime cette miniature" >{`  ${likeNumber}`}  </span> 
      
      </>
    </div>
  );
}

export default ModelBar;
