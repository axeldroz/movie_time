import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from './types';
  
  //const url = 'https://randomuser.me//api/?results=${nb}&page=1';
  
export const loginRequest = () => ({
    type: REGISTER_REQUEST,
});
  
export const loginSuccess = json => ({
    type: REGISTER_SUCCESS,
    payload: json,
});
  
export const loginFailure = error => ({
    type: REGISTER_FAILURE,
    payload: error,
});
  
export const registerFetch = (username, password) => {
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
          'http://localhost:3000/api/v1/users/',
          options
        );
        let json = await response.json();
        const str = JSON.stringify(json);
        //console.error('json' + str);
        //var str = JSON.stringify(json, null, 2);
        console.log("json=" + str);
        dispatch(loginSuccess(json));
        
      } catch (error) {
        dispatch(loginFailure(error));
      }
    };
  };

  