
/**
 * Created by Axel Drozdzynski on December 1st
 */

import {
    URL_BASE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from './types';
  
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
    console.log(( "CHECK2: username=" + username + ", password=" + password ) );
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
          URL_BASE + '/users/login',
          options
        );
        let json = await response.json();
        const str = JSON.stringify(json);
        //console.error('json' + str);
        //var str = JSON.stringify(json, null, 2);
        console.log("json=" + str);
        dispatch(loginSuccess(json));
        
      } catch (error) {
        console.log("error loginFetch: " + error)
        dispatch(loginFailure(error));
      }
    };
};
  