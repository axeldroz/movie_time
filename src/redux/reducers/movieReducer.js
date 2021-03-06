/**
 * Created by Axel Drozdzynski on February 1st 2020
 */

import {
    ADD_USER_MOVIE_REQUEST,
    ADD_USER_MOVIE_SUCCESS,
    ADD_USER_MOVIE_FAILURE,
    GET_ALL_MOVIES_REQUEST,
    GET_ALL_MOVIES_SUCCESS,
    GET_ALL_MOVIES_FAILURE,
  } from '../actions/types';

// Initial state
const initialState = {
  isLoading: false,
  message: 'loading',
  error: '',
  name: '',
  season: '',
  episode: '',
  movies: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_MOVIE_REQUEST:
        console.log("ADD_USER_MOVIE_REQUEST");
        console.log("Request");
      return {
        ...state,
        loading: true,
        message: 'loading',
        error: '',
        name: '',
        season: '',
        episode: ''
      };
    case ADD_USER_MOVIE_SUCCESS:
      console.log("success");
      console.log("RESULT:", (action.payload));
      return {
        ...state,
        isLoading: false,
        message: 'Your movie has been added successfully',
        error: '',
      };

    case ADD_USER_MOVIE_FAILURE:
        console.log("Fail");
      return {
        ...state,
        loading: false,
        error: 'Error while getting user info',
        token: 'ERROR',
        message: 'error'
      };
      case GET_ALL_MOVIES_REQUEST:
        console.log("ADD_USER_MOVIE_REQUEST");
        console.log("Request");
      return {
        ...state,
        loading: true,
        message: 'loading',
        error: '',
        name: '',
        season: '',
        episode: ''
      };
    case GET_ALL_MOVIES_SUCCESS:
      console.log("success");
      console.log("RESULT:", (action.payload.rows));
      return {
        ...state,
        isLoading: false,
        message: 'Get All movies success',
        movies: action.payload.rows,
        error: '',
      };

    case GET_ALL_MOVIES_FAILURE:
        console.log("Fail");
      return {
        ...state,
        loading: false,
        error: 'Error while getting user info',
        token: 'ERROR',
        message: 'error'
      };
    default:
      return state;
  }
}