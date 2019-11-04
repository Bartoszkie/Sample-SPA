import React from "react";

import {
  MovieDetailsContainer,
  Poster,
  MovieDesctipion
} from "./movie-details.styles";

import { H2 } from "../../sass/base/_typography.styles";

const MovieDetails = props => {
  return (
    <MovieDetailsContainer>
      <Poster>
        <img src={props.poster} alt=" "></img>
      </Poster>
      <MovieDesctipion>
        <H2>{props.description}</H2>
      </MovieDesctipion>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
