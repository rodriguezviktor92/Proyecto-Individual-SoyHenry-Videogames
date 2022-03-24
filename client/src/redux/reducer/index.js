const initialState = {
  videogames: [],
  filtergames: [],
  loading: false,
  currentPage: 1,
  videogamesPerPage: 15,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_VIDEOGAMES":
      return {
        ...state,
        videogames: state.videogames.concat(action.payload),
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
