import {MovieResultsTypes} from './movie-results.types';

const INITIAL_STATE = {
    fetchedItems: []
}

const MovieResultsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case MovieResultsTypes.FETCH_MOVIE_TITLES: 
        return {
            ...state, 
            fetchedItems: action.payload
        };
        default: 
        return state
    }
}

export default MovieResultsReducer;