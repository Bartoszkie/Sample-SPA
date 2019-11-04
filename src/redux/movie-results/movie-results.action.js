import {MovieResultsTypes} from './movie-results.types';

export const setMovieResults = results => ({
    type: MovieResultsTypes.FETCH_MOVIE_TITLES,
    payload: results
})

export const fetchMoviesBegin = () => ({
    type: MovieResultsTypes.FETCH_MOVIES_BEGIN
})

export const fetchMoviesSuccess = movies => ({
    type: MovieResultsTypes.FETCH_MOVIES_SUCCES, 
    payload: {movies}
})

export const fetchMoviesFailure = error => ({
    type: MovieResultsTypes.FETCH_MOVIES_FAILURE, 
    payload: {error}
})