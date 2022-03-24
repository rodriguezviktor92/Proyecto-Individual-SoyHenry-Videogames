export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

export const getAllVideogames = () => (dispatch) => {
  return fetch("http://localhost:3001/videogames")
    .then((response) => response.json())
    .then((json) => dispatch({ type: GET_ALL_VIDEOGAMES, payload: json }));
};

export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: pageNumber,
  };
};
