import { AsyncStorage } from 'react-native';

import {
    GET_STORE_TOKEN,
    SAVE_STORE_TOKEN,
    REMOVE_STORE_TOKEN,
    LOADING_STORE_TOKEN,
    ERROR_STORE_TOKEN
} from '../types.js';

export const getToken = (token) => ({
    type: GET_STORE_TOKEN,
    token
});

export const saveToken = token => ({
    type: SAVE_STORE_TOKEN,
    token
})

export const removeToken = token => ({
    type: REMOVE_STORE_TOKEN,
    token
})

export const loadingToken = token => ({
    type: LOADING_STORE_TOKEN,
    token
})

export const error = error => ({
    type: ERROR_STORE_TOKEN,
    error
});

export const getUserToken = () => dispatch => 
 AsyncStorage.getItem('userToken')
        .then((data) => {
            dispatch(loadingToken(false));
            dispatch(getToken(data));
        })
        .catch((err) => {
            dispatch(loadingToken(false));
            dispatch(error(err.message || 'ERROR'));
        })



export const saveUserToken = (data) => dispatch =>
    AsyncStorage.setItem('userToken', data)
        .then((data) => {
            dispatch(loading(false));
            dispatch(saveToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

export const removeUserToken = () => dispatch =>
    AsyncStorage.removeItem('userToken')
        .then((data) => {
            dispatch(loading(false));
            dispatch(removeToken(data));
        })
        .catch((err) => {
            dispatch(loading(false));
            dispatch(error(err.message || 'ERROR'));
        })

