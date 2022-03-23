export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";

export const getAllVideogames = () => (dispatch) => {
  return fetch("http://localhost:3001/videogames")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_VIDEOGAMES, payload: json }));
};
