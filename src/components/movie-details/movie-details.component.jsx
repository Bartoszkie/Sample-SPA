import React from "react";

import {
  MovieDetailsContainer,
  Poster,
  MovieDesctipion
} from "./movie-details.styles";

import { H4 } from "../../sass/base/_typography.styles";

const MovieDetails = props => {
  return (
    <MovieDetailsContainer>
      <Poster>
        <img src={props.poster} alt=" "></img>
      </Poster>
      <MovieDesctipion>
        <H4>{props.description}</H4>
      </MovieDesctipion>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
