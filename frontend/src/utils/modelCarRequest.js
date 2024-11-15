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
  if (reponse.status === 200) {
    reponseFetch.data = reponseJSON.data
  }
  return reponseFetch;
}