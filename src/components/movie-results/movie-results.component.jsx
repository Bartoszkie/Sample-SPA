import React from "react";
import shortid from "shortid";

//COMPONENTS
import MovieItem from "../movie-item/movie-item.component";
import MovieDetails from "../movie-details/movie-details.component";

//REDUX
import { connect } from "react-redux";
import {
  selectMoviesArray,
  selectMoviesLoading,
  selectErrors,
  selectMovieInfo
} from "../../redux/movie-results/movie-results.selector";

import { movieDetails } from "../../redux/movie-results/movie-results.action";

import { createStructuredSelector } from "reselect";

//STYLES
import {
  MovieResultsContainer,
  LoadingContainer,
  ResultsContainer,
  DetailsContainer
} from "./movie-results.styles";

import { H2 } from "../../sass/base/_typography.styles";

class MovieResults extends React.Component {
  render() {
    const {
      fetchedItems,
      loading,
      errors,
      movieDetails,
      showMovieInfo
    } = this.props;

    console.log("movie-results info: ", movieDetails);

    return (
      <MovieResultsContainer>
        {loading === true ? (
          <LoadingContainer>
            <H2>Loading...</H2>
          </LoadingContainer>
        ) : null}

        {errors !== null ? (
          <LoadingContainer>
            <H2>No results :(</H2>
          </LoadingContainer>
        ) : null}

        {fetchedItems.length !== 0 && loading === false ? (
          <ResultsContainer>
            <ol>
              {fetchedItems.movies.map(item => (
                <MovieItem
                  key={shortid.generate()}
                  title={item.Title}
                  rating={item.imdbRating}
                  year={item.Year}
                  onClick={() => showMovieInfo(item)}
                />
              ))}
            </ol>
          </ResultsContainer>
        ) : null}

        {movieDetails.length !== 0 && loading !== true ? (
          <DetailsContainer>
            { 
              <MovieDetails poster={movieDetails.Poster} description={movieDetails.Plot} />
            }
          </DetailsContainer>
        ) : null}
      </MovieResultsContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetchedItems: selectMoviesArray,
  loading: selectMoviesLoading,
  errors: selectErrors,
  movieDetails: selectMovieInfo
});

const mapDispatchToProps = dispatch => ({
  showMovieInfo: item => dispatch(movieDetails(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieResults);
