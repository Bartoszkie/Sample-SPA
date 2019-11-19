import { shallow } from "enzyme";
import React from "react";
import MovieItem from ".././components/movie-item/movie-item.component";

it("MovieDetails snapshot test", () => {
  const mockProps = {
    key: 1,
    title: "title",
    rating: "123",
    year: "2019",
    onClick: jest.fn()
  };
  expect(shallow(<MovieItem props={mockProps}/>)).toMatchSnapshot();
});
