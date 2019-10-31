import { MovieResultsTypes } from "./movie-results.types";
import { getResults } from "./movie-results.utils";

const INITIAL_STATE = {
  fetchedItems: [],
  loading: false,
  error: null
};

const MovieResultsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieResultsTypes.FETCH_MOVIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
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
    default:
      return state;
  }
};

export default MovieResultsReducer;
