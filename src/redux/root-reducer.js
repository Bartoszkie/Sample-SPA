import { combineReducers } from "redux";

import movieResultsReducer from "./movie-results/movie-results.reducer";

const rootReducer = combineReducers({
  movieResults: movieResultsReducer
});

export default rootReducer;
