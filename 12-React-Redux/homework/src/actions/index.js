const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=b1d4d970&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
        });
    };
  }

  export function getMovieDetail(payload) {
    return { type: GET_MOVIE_DETAIL, payload};
  }

  export function removeMovieFavorite(payload) {
    return { type: REMOVE_MOVIE_FAVORITE, payload };
  }