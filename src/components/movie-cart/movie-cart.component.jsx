import React from "react";

//STYLES
import { H4 } from "../../sass/base/_typography.styles";
import { MovieCartContainer} from "./movie-cart.styles";

import MovieItem from "../movie-item/movie-item.component";

const MovieCart = () => {
  return (
    <MovieCartContainer>
      <H4>Category Name</H4>
      <ol>
        <MovieItem/>
        <MovieItem/>
        <MovieItem/>
      </ol>
    </MovieCartContainer>
  );
};

export default MovieCart;
