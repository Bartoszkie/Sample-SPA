//API CALL - omdbapi 
import {fetchMoviesBegin, fetchMoviesSuccess, fetchMoviesFailure} from '../movie-results/movie-results.action';

const API_KEY = "d14e23d0";

export function getResults(inputValue) {
    return async (dispatch) => {

      dispatch(fetchMoviesBegin());

      try {
          dispatch(fetchMoviesBegin());

          const getAPIS = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputValue}`);
          const apiTOJSON = await getAPIS.json();

          //Array ID's assignment
          const returnedValues = apiTOJSON.Search;
          const getIDS = returnedValues.map(item => item.imdbID);

          //Array full of fetched items info
          const fetchInfo = await Promise.all(getIDS.map(id => fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
              .then(item => item.json())));

          //Here is the sorted array full of movies with details 
          fetchInfo.sort((a, b) => (a.imdbRating > b.imdbRating) ? -1 : 1);
          dispatch(fetchMoviesSuccess(fetchInfo));
      }
      catch (error) {
          dispatch(fetchMoviesFailure(error));
        }
    }
}


export const addMovieInfo = (movies, movieToDisplay) => {
    const isMovie = movies.find(item => item.imdbID === movieToDisplay.imdbID);
    if(isMovie) return movieToDisplay;
} 



