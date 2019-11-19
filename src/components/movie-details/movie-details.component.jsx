import React from "react";

import {
  MovieDetailsContainer,
  Poster,
  MovieDesctipion
} from "./movie-details.styles";

import H from '../typography/H.component';

const MovieDetails = props => {
  return (
    <MovieDetailsContainer>
      <Poster>
        <img src={props.poster} alt=" "></img>
      </Poster>
      <MovieDesctipion>
        <H size={"medium"} text={props.description}></H>
      </MovieDesctipion>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
