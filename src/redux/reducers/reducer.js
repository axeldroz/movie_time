import {
    FETCHING_USERS_REQUEST,
    FETCHING_USERS_SUCCESS,
    FETCHING_USERS_FAILURE,
  } from '../actions/types';

// Initial state
const initialState = {
  isLoading: false,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCHING_USERS_SUCCESS:
      const {results} = action.payload.results;
      return {
        ...state,
        isLoading: false,
        users: results,
      };
    case FETCHING_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching users',
      };
    default:
      return state;
  }
}

export function listUsers(nb) {
  return {
    type: GET_USERS,
    payload: {
        request: {
            url: `/api/?results=${nb}&page=1`,
            },
        },
    };
}