/**
 * Created by Axel Drozdzynski on November 30th
 * 
 * Goal: this is the main reducer of the tab views
 */

import {
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    UPLOAD_PROFILE_PICTURE_REQUEST,
    UPLOAD_PROFILE_PICTURE_REFRESH,
    UPLOAD_PROFILE_PICTURE_SUCCESS,
    UPLOAD_PROFILE_PICTURE_FAILURE,
    UPDATE_USER_INFO_REQUEST,
    UPDATE_USER_INFO_SUCCESS,
    UPDATE_USER_INFO_FAILURE,
  } from '../actions/types';

// Initial state
const initialState = {
  isLoading: false,
  username: '',
  created_date: '',
  created_date: '',
  email: '',
  id: 0,
  message: 'loading',
  avatarSource: '',
  profilePictureBase64: '',
  profilePictureUri: '',
  profilePictureType: '',
  profilePictureFilename: '',
  picture: '',
  bio: 'test'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
        console.log("Request = Refresh");
        console.log("Request");
      return {
        ...state,
        loading: true,
        message: 'loading',
        error: '',
      };
    case GET_USER_INFO_SUCCESS:
      console.log("success");
      const {results} = action.payload;
      console.log("RESULT:", (action.payload.infos));
      return {
        ...state,
        isLoading: false,
        message: 'Success, here is your token : ' + action.payload.message,
        error: '',
        username: action.payload.infos.username,
        email: action.payload.infos.email,
        id: action.payload.infos.id,
        created_date: action.payload.infos.created_date,
        created_date: action.payload.infos.created_date,
        picture: action.payload.infos.picture
      };

    case GET_USER_INFO_FAILURE:
        console.log("Fail");
      return {
        ...state,
        loading: false,
        error: 'Error while getting user info',
        token: 'ERROR',
        message: 'error'
      };
      case UPLOAD_PROFILE_PICTURE_REQUEST:
        console.log("Request = Refresh");
      return {
        ...state,
        loading: true,
        message: 'loading',
        error: '',
      };

      case UPLOAD_PROFILE_PICTURE_REFRESH:
        console.log("Refresh");
        console.log("payload", action.payload);
      return {
        ...state,
        profilePictureUri: action.payload.uri.uri,
        //profilePictureBase64: action.payload.base64
        profilePictureType: action.payload.type,
        profilePictureFilename: action.payload.name,
      };

    case UPLOAD_PROFILE_PICTURE_SUCCESS:
      console.log("success");
      console.log("RESULT:", action.payload.token);
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        message: 'Success, here is your token : ' + action.payload.token,
        error: '',
      };

    case UPLOAD_PROFILE_PICTURE_FAILURE:
      console.log("Fail");
      return {
        ...state,
        loading: false,
        error: 'Error while signing in',
        token: 'ERROR',
        message: 'error'
      };

    case UPDATE_USER_INFO_REQUEST:
        console.log("Request = Refresh");
        console.log("Request");
      return {
        ...state,
        loading: true,
        message: 'loading',
        error: '',
      };
    case UPDATE_USER_INFO_SUCCESS:
      console.log("RESULT:", (action.payload));
      return {
        ...state,
        isLoading: false,
        message: 'message : ' + action.payload.message,
        error: '',
        username: action.payload.infos.username,
        bio: action.payload.infos.bio,
      };

    case UPDATE_USER_INFO_FAILURE:
        console.log("Fail");
      return {
        ...state,
        loading: false,
        error: 'Error while update user info',
        token: 'ERROR',
        message: 'error'
      };
    default:
      return state;
  }
}