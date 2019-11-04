import {createSelector} from 'reselect';

const selectFetchedItems = state => state.movieResults;

export const itemsSelector = createSelector(
    [selectFetchedItems], 
    movieResults => movieResults.fetchedItems
); 