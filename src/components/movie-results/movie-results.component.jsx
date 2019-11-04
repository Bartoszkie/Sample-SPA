import React from "react";

import shortid from "shortid";

import MovieItem from "../movie-item/movie-item.component";

import { connect } from "react-redux";
import {
  selectMoviesArray,
  selectMoviesLoading,
  selectErrors
} from "../../redux/movie-results/movie-results.selector";

import { createStructuredSelector } from "reselect";
import {
  MovieResultsContainer,
  LoadingContainer,
  ResultsContainer, 
  DetailsContainer
} from "./movie-results.styles";
import { H2 } from "../../sass/base/_typography.styles";

class MovieResults extends React.Component {
  render() {
    const { fetchedItems, loading, errors } = this.props;

    console.log("movie-results container: ", fetchedItems.movies);

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
                <MovieItem key={shortid.generate()}
                title={item.Title}
                rating={item.imdbRating}
                year={item.Year}
                />
              ))}
            </ol>
          </ResultsContainer>
        ) : null}
        
        <DetailsContainer>
                
        </DetailsContainer>
      
      </MovieResultsContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  fetchedItems: selectMoviesArray,
  loading: selectMoviesLoading,
  errors: selectErrors
});

export default connect(mapStateToProps)(MovieResults);
