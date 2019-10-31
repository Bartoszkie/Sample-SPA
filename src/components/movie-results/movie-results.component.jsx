import React from "react";

import shortid from 'shortid';

import { connect } from "react-redux";
import {
  selectMoviesArray,
  selectMoviesLoading,
  selectErrors
} from "../../redux/movie-results/movie-results.selector";

import { createStructuredSelector } from "reselect";
import { MovieResultsContainer } from "./movie-results.styles";

class MovieResults extends React.Component {
  render() {
    const { fetchedItems, loading, errors } = this.props;

    console.log("movie-results container: ", fetchedItems.movies);

    return (
      <MovieResultsContainer>
        {loading === true ? (
          <div>
            <p>Loading...</p>
          </div>
        ) : null}

        {errors !== null ? (
          <div>
            <p>No results :(</p>
          </div>
        ) : null}

        {fetchedItems.length !== 0 && loading === false ? (
          <div>
            {
              fetchedItems.movies.map(item => (
                <div key={shortid.generate()}>{item.Title}</div>
              ))
            }
          </div>
        ) : null
        }

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
