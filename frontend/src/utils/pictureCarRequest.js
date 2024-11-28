export const ADD_NEW_PICTURE = async (bodyRequest) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_PICTURECARS}`, {
    method: "POST",
    body: bodyRequest,
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}

export const ADD_NEW_IMAGE = async (bodyRequest) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_PICTURECARS}/image`, {
    method: "POST",
    body: bodyRequest,
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}

export const GET_ONE_PICTURE = async (modelCarsId) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_PICTURECARS}/one/${modelCarsId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}

export const GET_ALL_PICTURE = async (modelCarsId) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_PICTURECARS}/${modelCarsId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}

export const UPDATE_PICTURE = async (bodyUpdate,pictureCarsId) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_PICTURECARS}/${pictureCarsId}`, {
    method: "PATCH",
    body: JSON.stringify(bodyUpdate),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}

export const DELETE_PICTURE = async (pictureCarsId, deleteFiles) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_PICTURECARS}/${pictureCarsId}`, {
    method: "DELETE",
    body: JSON.stringify(deleteFiles),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}