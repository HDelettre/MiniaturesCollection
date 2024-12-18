export const CREATE_USER = async (bodyRequest) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_USERS}/signup`, {
    method: "POST",
    body: bodyRequest,
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}

export const LOGIN_USER = async (loginRequest) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_USERS}/login`, {
    method: "POST",
    body: JSON.stringify(loginRequest),
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

export const GET_ALL_USERS = async () => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_USERS}`, {
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

export const GET_ONE_USER = async (userId) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_USERS}/${userId}`, {
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

export const UPDATE_USER = async (bodyUpdate, userId) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_USERS}/${userId}`, {
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

export const DELETE_USER = async (userId, deleteFiles) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_USERS}/${userId}`, {
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