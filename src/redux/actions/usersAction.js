import {
    FETCHING_USERS_REQUEST,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE,
  } from './types';
  
  const url = 'https://randomuser.me//api/?results=${nb}&page=1';
  
  export const fetchingUsersRequest = () => ({
    type: FETCHING_USERS_REQUEST,
  });
  
  export const fetchingUsersSuccess = json => ({
    type: FETCHING_USERS_SUCCESS,
    payload: json,
  });
  
  export const fetchingUsersFailure = error => ({
    type: FETCHING_USERS_FAILURE,
    payload: error,
  });
  
  /*export const fetchUsers = () => {
    console.log('ok');
    return async dispatch => {
      dispatch(fetchingUsersRequest());
      try {
        console.log('ok');
        let response = await fetch(
          'https://randomuser.me//api/?results=${nb}&page=1',
        );
        let json = await response.json();
        dispatch(fetchingUsersSuccess(json.results));
        return response;
      } catch (error) {
        dispatch(fetchingUsersFailure(error));
      }
    };
  };*/
  
  export const fetchUsers = () => {
    console.log('ok');
    return async dispatch => {
      dispatch(fetchingUsersRequest());
      try {
        console.log('ok');
        let response = await fetch(
          'https://randomuser.me//api/?results=10&page=1',
        );
        let json = await response.json();
        const str = JSON.stringify(json);
        //console.error('json' + str);
        dispatch(fetchingUsersSuccess(json.results));
      } catch (error) {
        dispatch(fetchingUsersFailure(error));
      }
    };
  };
  
  /*export const fetchUsers = () => {
    console.log('ok');
    return async dispatch => {
      dispatch(fetchingUsersRequest());
    };
  };
  