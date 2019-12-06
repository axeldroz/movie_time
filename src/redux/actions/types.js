import { Platform } from 'react-native';

export const URL_BASE = (Platform.OS === 'ios') ? 'http://localhost:3000/api/v1' : 'http://10.0.2.2:3000/api/v1';

export const GET_TOKEN = 'GET_TOKEN';
export const SAVE_TOKEN = 'SAVE_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const LOADING_TOKEN = 'REMOVE_TOKEN';
export const ERROR_TOKEN = 'REMOVE_TOKEN';

export const FETCHING_USERS_REQUESTS = 'FETCHING_USERS_REQUEST';
export const FETCHING_USERS_SUCCESS = 'FETCHING_USERS_SUCCESS';
export const FETCHING_USERS_FAILURE = 'FETCHING_USERS_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

/* Store management */
export const GET_STORE_TOKEN="GET_STORE_TOKEN";
export const SAVE_STORE_TOKEN="SAVE_STORE_TOKEN";
export const REMOVE_STORE_TOKEN="REMOVE_STORE_TOKEN";
export const LOADING_STORE_TOKEN="LOADING_STORE_TOKEN";
export const ERROR_STORE_TOKEN="ERROR_STORE_TOKEN";

/**
 * Main views
 */

 // Profile views
 export const GET_USER_INFO_REQUEST="GET_USER_INFO"
 export const GET_USER_INFO_SUCCESS="GET_USER_INFO_SUCCESS"
 export const GET_USER_INFO_FAILURE="GET_USER_INFO_SUCCESS"
