import React from "react";

import { connect } from "react-redux";
import { setMovieResults } from "../../redux/movie-results/movie-results.action";
import {itemsSelector} from '../../redux/movie-results/movie-results.selector';

import {createStructuredSelector} from 'reselect';

import MovieCart from "../movie-cart/movie-cart.component";

import { MovieResultsContainer } from "./movie-results.styles";

const MovieResults = ({movieResults}) => {
  console.log(movieResults);

  (function fetchData() {
    const API_KEY = "d14e23d0";
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=avengers`)
      .then(result => result.json())
      .then(result => console.log(result))
      .then(result => setMovieResults(result));
  }())

  return (
    <MovieResultsContainer>
      <MovieCart />
      <MovieCart />
      <MovieCart />
      <MovieCart />
      <MovieCart />
      <MovieCart />
    </MovieResultsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  movieResults: itemsSelector
});

const mapDispatchToProps = dispatch => ({
  setMovieResults: items => dispatch(setMovieResults(items))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieResults);
