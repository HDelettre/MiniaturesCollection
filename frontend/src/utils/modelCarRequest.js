export const GET_ALL_MODELS = async () => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_MODELCARS}`, {
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

export const CREATE_MODEL = async (bodyRequest) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_MODELCARS}`, {
    method: "POST",
    body: JSON.stringify(bodyRequest),
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

export const GET_ONE_MODEL = async (modelCarsId) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_MODELCARS}/${modelCarsId}`, {
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

export const UPDATE_MODEL = async (bodyUpdate, modelCarsId) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_MODELCARS}/${modelCarsId}`, {
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

export const DELETE_MODEL = async (modelCarsId, pictureCollection) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_MODELCARS}/${modelCarsId}`, {
    method: "DELETE",
    body: JSON.stringify(pictureCollection),
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