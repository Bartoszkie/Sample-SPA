import { MovieResultsTypes } from "./movie-results.types";

const INITIAL_STATE = {
  fetchedItems: [],
  loading: false,
  error: null, 
  movieDetails: []
};

export const MovieResultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieResultsTypes.FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null, 
        movieDetails: []
      };
    case MovieResultsTypes.FETCH_MOVIES_SUCCES:
      return {
        ...state,
        loading: false,
        fetchedItems: action.payload
      };
    case MovieResultsTypes.FETCH_MOVIES_FAILURE: 
    return {
        ...state, 
        loading: false, 
        error: action.payload, 
        fetchedItems: []
    }
    case MovieResultsTypes.FETCH_MOVIE_DETAILS: 
    return {
      ...state, 
      movieDetails: action.payload
    }
    default:
      return state;
  }
};

export default MovieResultsReducer;
