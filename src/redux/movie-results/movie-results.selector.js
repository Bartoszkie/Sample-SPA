import {createSelector} from 'reselect';

const selectMovies = state => state.movieResults;

export const selectMoviesArray = createSelector(
    [selectMovies], 
    movieResults => movieResults.fetchedItems
);

export const selectMoviesLoading = createSelector(
    [selectMovies], 
    movieResults => movieResults.loading
);

export const selectErrors = createSelector(
    [selectMovies], 
    movieResults => movieResults.error
);
