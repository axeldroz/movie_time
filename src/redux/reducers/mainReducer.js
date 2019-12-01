/**
 * Created by Axel Drozdzynski on November 30th
 * 
 * Goal: this is the main reducer of the tab views
 */

import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
  } from '../actions/types';

// Initial state
const initialState = {
  isLoading: false,
  username: '',
  created_date: '',
  created_date: '',
  email: '',
  id: 0,
  message: 'loading'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
        console.log("Request = Refresh");
        console.log("Request");
      return {
        ...state,
        loading: true,
        message: 'loading',
        error: '',
      };
    case GET_USER_INFO_SUCCESS:
      console.log("success");
      const {results} = action.payload;
      console.log("RESULT:", (action.payload.infos));
      return {
        ...state,
        isLoading: false,
        message: 'Success, here is your token : ' + action.payload.message,
        error: '',
        username: action.payload.infos.username,
        email: action.payload.infos.email,
        id: action.payload.infos.id,
        created_date: action.payload.infos.created_date,
        created_date: action.payload.infos.created_date
      };
    case GET_USER_INFO_FAILURE:
        console.log("Fail");
      return {
        ...state,
        loading: false,
        error: 'Error while signing in',
        token: 'ERROR',
        message: 'error'
      };
    default:
      return state;
  }
}