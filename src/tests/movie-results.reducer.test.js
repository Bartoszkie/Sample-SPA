import { MovieResultsReducer } from "../redux/movie-results/movie-results.reducer";

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
        type: "FETCH_MOVIES_BEGIN"
      })
    ).toEqual(mockExpectedState);
  });

  it("should return and assing content to fetchedItems", () => {
    expect(
      MovieResultsReducer(mockInitialState, {
        type: "FETCH_MOVIES_SUCCES",
        payload: {
          Title: "Batman",
          Year: "2008",
          Rated: "N/A",
          Released: "07 Feb 2018"
        }
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
});
