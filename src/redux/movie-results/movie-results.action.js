import {MovieResultsTypes} from './movie-results.types';

export const setMovieResults = results => ({
    type: MovieResultsTypes.FETCH_MOVIE_TITLES,
    payload: results
})