import { MovieResultsReducer } from "../redux/movie-results/movie-results.reducer";
import { MovieResultsTypes } from "../redux/movie-results/movie-results.types";

describe("Movie Results Reducer tests: ", () => {
  const mockInitialState = {
    fetchedItems: [],
    loading: false,
    error: null,
    movieDetails: []
  };

  it("should return default action -- the ininital state", () => {
    expect(MovieResultsReducer(undefined, {})).toEqual(mockInitialState);
  });

  it("should return loading changed to true -- loading of items started", () => {
    const mockExpectedState = {
      fetchedItems: [],
      loading: true,
      error: null,
      movieDetails: []
    };
    expect(
      MovieResultsReducer(mockInitialState, {
        type: MovieResultsTypes.FETCH_MOVIES_BEGIN
      })
    ).toEqual(mockExpectedState);
  });

  it("should return and assing content to fetchedItems", () => {
    expect(
      MovieResultsReducer(mockInitialState, {
        type: MovieResultsTypes.FETCH_MOVIES_SUCCES,
        payload: [
          {
            Title: "Batman",
            Year: "2008",
            Rated: "N/A",
            Released: "07 Feb 2018"
          }
        ]
      })
    ).toEqual({
      error: null,
      movieDetails: [],
      loading: false,
      fetchedItems: [
        {
          Title: "Batman",
          Year: "2008",
          Rated: "N/A",
          Released: "07 Feb 2018"
        }
      ]
    });
  });

  it("should return error message and assing it to the error field", () => {
    expect(
      MovieResultsReducer(mockInitialState, {
        type: MovieResultsTypes.FETCH_MOVIES_FAILURE,
        payload: "Error!"
      })
    ).toEqual({
      error: "Error!",
      movieDetails: [],
      loading: false,
      fetchedItems: []
    });
  });

  it("should return details of movie and assing it to the details field", () => {
    expect(
      MovieResultsReducer(mockInitialState, {
        type: MovieResultsTypes.FETCH_MOVIE_DETAILS,
        payload: [
          {
            Title: "Spiele mit Bart: The Movie feat. Night Trap",
            Year: "2018",
            Rated: "N/A"
          }
        ]
      })
    ).toEqual({
      error: null,
      movieDetails: [
        {
          Title: "Spiele mit Bart: The Movie feat. Night Trap",
          Year: "2018",
          Rated: "N/A"
        }
      ],
      loading: false,
      fetchedItems: []
    });
  });
});
