import {
  GET_ALL_VIDEOGAMES,
  SET_LOADING,
  SET_CURRENT_PAGE,
  SORT_BY_SOURCE,
  SORT_BY_GENRE,
  ORDER_BY_NAME,
  SEARCH_GAME,
  ORDER_BY_RATING,
  GET_VIDEOGAME,
  GET_ALL_GENRES,
  GET_ALL_PLATFORMS,
  RESET_VIDEOGAME,
} from "../actions/index";

const initialState = {
  videogames: [],
  filtergames: [],
  videogame: [],
  genres: [],
  platforms: [],
  loading: false,
  currentPage: 1,
  videogamesPerPage: 15,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        filtergames: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SORT_BY_SOURCE:
      switch (action.payload) {
        case "API":
          return {
            ...state,
            filtergames: state.videogames.filter(
              (videogame) => videogame.id.toString().length < 36
            ),
            currentPage: 1,
          };
        case "DB":
          return {
            ...state,
            filtergames: state.videogames.filter(
              (videogame) => videogame.id.toString().length === 36
            ),
            currentPage: 1,
          };
        default:
          return {
            ...state,
            filtergames: state.videogames,
            currentPage: 1,
          };
      }
    case SORT_BY_GENRE:
      let result = [];
      console.log(action.payload);
      if (action.payload === "ALL" || action.payload === -1) {
        result = state.videogames;
      } else {
        state.videogames.forEach((videogame) => {
          if (
            videogame.genres.filter(
              (genre) => genre.id === parseInt(action.payload, 10)
              //(genre) => genre.id === action.payload
            ).length
          ) {
            result.push(videogame);
          }
        });
      }
      return {
        ...state,
        filtergames: result,
        currentPage: 1,
      };
    case ORDER_BY_NAME:
      const ordergames =
        action.payload === "asc"
          ? state.filtergames.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : state.filtergames.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        filtergames: ordergames,
        currentPage: 1,
      };
    case SEARCH_GAME:
      return {
        ...state,
        filtergames: action.payload,
        currentPage: 1,
        loading: false,
      };
    case ORDER_BY_RATING:
      const orderGamesByRating =
        action.payload === "min"
          ? state.filtergames.sort(function (a, b) {
              if (a.rating > b.rating) return 1;
              if (b.rating > a.rating) return -1;
              return 0;
            })
          : state.filtergames.sort(function (a, b) {
              if (a.rating > b.rating) return -1;
              if (b.rating > a.rating) return 1;
              return 0;
            });
      return {
        ...state,
        filtergames: orderGamesByRating,
        currentPage: 1,
      };
    case GET_VIDEOGAME:
      return {
        ...state,
        videogame: action.payload,
        loading: false,
      };
    case GET_ALL_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_ALL_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case RESET_VIDEOGAME: {
      return {
        ...state,
        videogame: [],
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
