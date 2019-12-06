import {
    URL_BASE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
  } from './types';
  
  //const url = 'https://randomuser.me//api/?results=${nb}&page=1';
  
export const getUserInfoRequest = () => {    
    console.log('getUserInfoRequest');
    return (
    {
        type: GET_USER_INFO_REQUEST,
    });
}
  
export const getUserInfoSuccess = json => ({
    type: GET_USER_INFO_SUCCESS,
    payload: json,
});
  
export const getUserInfoFailure = error => ({
    type: GET_USER_INFO_FAILURE,
    payload: error,
});
  
/**
 * Action to get all the user info
 * It's used for the ProfileView
 * 
 * @param {String} token 
 */
export const userInfoFetch = (token) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token' : token
        }
      };
    return async dispatch => {
        
        dispatch(getUserInfoRequest());
        try {
            console.log('Ok dispatch');
            let response = await fetch(
            URL_BASE + '/users/me',
            //'http://localhost:3000/api/v1/users/me' // for iOS
            options
            );
            let json = await response.json();
            const str = JSON.stringify(json);
            //console.error('json' + str);
            //var str = JSON.stringify(json, null, 2);
            console.log("json=" + str);
            dispatch(getUserInfoSuccess(json));
        
        } catch (error) {
            console.log('ERROR=', error);
            dispatch(getUserInfoFailure(error));
        } 
    };
  };
  