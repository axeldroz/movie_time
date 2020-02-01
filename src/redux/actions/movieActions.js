/**
 * Created by Axel Drozdzynski on February 1st 2020
 */

import {
    URL_BASE,
    ADD_USER_MOVIE_REQUEST,
    ADD_USER_MOVIE_SUCCESS,
    ADD_USER_MOVIE_FAILURE,
  } from './types';
  
  //const url = 'https://randomuser.me//api/?results=${nb}&page=1';
  
export const addMovieRequest = () => ({
    type: ADD_USER_MOVIE_REQUEST,
});
  
export const addMovieSuccess = json => ({
    type: ADD_USER_MOVIE_SUCCESS,
    payload: json,
});
  
export const addMovieFailure = error => ({
    type: ADD_USER_MOVIE_FAILURE,
    payload: error,
});

const defaultMovie = {
    name: "Hi",
    season: "1",
    episode: "2",
    type: "TV_SHOW"
};

export const addMovieFetch = (token, movie = defaultMovie) => {
    console.log('add Movie Fetch');
    var body = '{name: "", season: "", episode: ""}';
    console.log("data:", movie);
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'x-access-token' : token
        },
        body: JSON.stringify(movie)
      };
      

    return async dispatch => {
      dispatch(addMovieRequest());
      try {
        console.log('ok');
        let response = await fetch(
          URL_BASE + '/movie',
          options
        );
        let json = await response.json();
        console.log("ok2")
        const str = JSON.stringify(json);
        console.log("json=" + str);
        dispatch(addMovieSuccess(json));
        
      } catch (error) {
        console.log("Error: ", error.message);
        dispatch(addMovieFailure(error));
      }
    };
  };

  