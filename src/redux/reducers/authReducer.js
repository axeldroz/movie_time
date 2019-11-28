import {
    GET_STORE_TOKEN,
    SAVE_STORE_TOKEN,
    REMOVE_STORE_TOKEN,
    LOADING_STORE_TOKEN,
    ERROR_STORE_TOKEN
} from '../actions/types.js';

export default AuthReducer = (state = {
    token: null,
    loading: true,
    error: null,
}, action) => {
    switch (action.type) {
        case GET_STORE_TOKEN:
            return { ...state, token: action.token };
        case SAVE_STORE_TOKEN:
            return { ...state, token: action.token };
        case REMOVE_STORE_TOKEN:
            return { ...state, token: action.token };
        case LOADING_STORE_TOKEN:
            return { ...state, loading: action.isLoading };
        case ERROR_STORE_TOKEN:
            return { ...state, error: action.error };
        default:
            return state;
    }
};