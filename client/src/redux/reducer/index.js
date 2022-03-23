const initialState = {
  videogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_VIDEOGAMES":
      return {
        ...state,
        videogames: state.videogames.concat(action.payload.slice(0, 15)),
      };
    default:
      return state;
  }
};

export default rootReducer;
