import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from '../actions/types';

// Initial state
const initialState = {
  isLoading: false,
  token: '',
  message: 'loading'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
        console.log("Request");
      return {
        ...state,
        loading: true,
        message: 'loading'
      };
    case LOGIN_SUCCESS:
      console.log("success");
      const {results} = action.payload.token;
      console.log("RESULT:", action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        message: 'Success, here is your token : ' + action.payload.token,
        error: '',
      };
    case LOGIN_FAILURE:
        console.log("Fail");
      return {
        ...state,
        loading: false,
        error: 'Error while signing in',
        message: 'error'
      };
    default:
      return state;
  }
}

export function login(login, password) {
  return {
    type: LOGIN_REQUEST,
    payload: {
        request: {
            url: `/api/v1/users/login`,
            },
        },
    };
}