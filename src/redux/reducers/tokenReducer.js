import {
    GET_TOKEN,
    SAVE_TOKEN,
    REMOVE_TOKEN,
    LOADING_TOKEN,
    ERROR_TOKEN
  } from '../actions/types';

// Initial state
const initialState = {
  isLoading: false,
  users: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
        return { ...state, token: action.token };
    case SAVE_TOKEN:
        return { ...state, token: action.token };
    case REMOVE_TOKEN:
        return { ...state, token: action.token };
    case LOADING_TOKEN:
        return { ...state, loading: action.isLoading };
    case ERROR_TOKEN:
        return { ...state, error: action.error };
    default:
      return state;
  }
}