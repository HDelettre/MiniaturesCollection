export const NEW_POST = async (postRequest) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_POSTS}`, {
    method: "POST",
    body: JSON.stringify(postRequest),
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
};

export const GET_ALL_POST = async () => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_POSTS}`, {
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
};

export const GET_ONE_POST = async (postId) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_POSTS}/${postId}`, {
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
};

export const UPDATE_POST = async (bodyUpdate,postId) => {
  let reponseFetch = { status: "", message: "", data:"" };
  const reponse = await fetch(`${process.env.REACT_APP_API_POSTS}/${postId}`, {
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

export const DELETE_POST = () => {};

export const ADD_POST_IMAGE = async (bodyRequest) => {
  let reponseFetch = {status: "", message: "", data:""};
  const reponse = await fetch(`${process.env.REACT_APP_API_POSTS}/image`, {
    method: "POST",
    body: bodyRequest,
  });
  const reponseJSON = await reponse.json();
  reponseFetch.status = reponse.status;
  reponseFetch.message = reponseJSON.message;
  reponseFetch.data = reponseJSON.data
  
  return reponseFetch;
}