import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from '../actions/types';

// Initial state
const initialState = {
  isLoading: false,
  token: '',
  message: 'loading'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
        console.log("Request = Refresh");
        console.log("Request");
      return {
        ...state,
        loading: true,
        message: 'loading',
        error: '',
      };
    case REGISTER_SUCCESS:
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
    case REGISTER_FAILURE:
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