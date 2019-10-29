import React from 'react';

import MovieCart from '../movie-cart/movie-cart.component';

import {MovieResultsContainer} from './movie-results.styles';

const MovieResults = () => {
    return (
        <MovieResultsContainer>
            <MovieCart/>
            <MovieCart/>
            <MovieCart/>
            <MovieCart/>
            <MovieCart/>
            <MovieCart/>
        </MovieResultsContainer>
    );
}

export default MovieResults;