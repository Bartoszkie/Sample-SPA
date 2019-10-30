import React from "react";

import { connect } from "react-redux";
import { setMovieResults } from "../../redux/movie-results/movie-results.action";

import MovieCart from "../movie-cart/movie-cart.component";

import { MovieResultsContainer } from "./movie-results.styles";

class MovieResults extends React.Component {
  componentDidMount() {
    const API_KEY = "d14e23d0";
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=avengers`)
      .then(result => result.json())
      .then(result => console.log(result))
      .then(result => setMovieResults(result));
  }

  render() {
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
  }
}

const mapDispatchToProps = dispatch => ({
    setMovieResults: (items) => dispatch(setMovieResults(items))
})

export default connect(null, mapDispatchToProps)(MovieResults);
