
import axios from 'axios';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from './types';
  
  //const url = 'https://randomuser.me//api/?results=${nb}&page=1';
  
export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});
  
export const loginSuccess = json => ({
    type: LOGIN_SUCCESS,
    payload: json,
});
  
export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    payload: error,
});
  
export const loginFetch = (username, password) => {
    console.log('ok');

    const options = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
      };

    return async dispatch => {
      dispatch(loginRequest());
      try {
        console.log('ok');
        let response = await fetch(
          'http://localhost:3000/api/v1/users/login',
          options
        );
        let json = await response.json();
        const str = JSON.stringify(json);
        //console.error('json' + str);
        console.log(json)
        dispatch(loginSuccess(json));
      } catch (error) {
        dispatch(loginFailure(error));
      }
    };
  };

  /*export const loginFetch = (username, password) => {
    console.log('ok');

    const request = {
        url: 'http://localhost:3000/api/v1/users/login',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            email: username,
            password: password
        })
      };

    return async dispatch => {
      dispatch(loginRequest());
      try {
        console.log('ok');
        let response = await axios(options);
        //let json = await response.json();
        const str = JSON.stringify(json);
        //console.error('json' + str);
        request.then((response) => {
            console.log(response)
            dispatch(fetchOffersSuccess(response));
        })
        .catch((err) => {
            console.log(err)
            dispatch(loginFailure(err))
        })
        dispatch(loginSuccess(json.results));
      } catch (error) {
        dispatch(loginFailure(error));
      }
    };
  };*/
  