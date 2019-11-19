import { shallow } from "enzyme";
import React from "react";
import MovieDetails from ".././components/movie-details/movie-details.component";

it("MovieDetails snapshot test", () => {
  expect(shallow(<MovieDetails />)).toMatchSnapshot();
});
