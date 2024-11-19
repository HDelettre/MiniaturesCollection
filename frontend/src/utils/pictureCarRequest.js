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