/**
 * Created by Axel Drozdzynski on December 1st
 */

import {
    URL_BASE,
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
  } from './types';
  
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

export const uploadProfilePictureRequest = () => ({
    type: UPLOAD_PROFILE_PICTURE_REQUEST,
});

export const uploadProfilePictureRefresh = json => ({
    type: UPLOAD_PROFILE_PICTURE_REFRESH,
    payload: json
});
  
export const uploadProfilePictureSuccess = json => ({
    type: UPLOAD_PROFILE_PICTURE_SUCCESS,
    payload: json,
});
  
export const uploadProfilePictureFailure = error => ({
    type: UPLOAD_PROFILE_PICTURE_FAILURE,
    payload: error,
});

export const updateUserInfoRequest = json => ({
    type: UPDATE_USER_INFO_REQUEST,
    payload: json,
});

export const updateUserInfoSuccess = json => ({
    type: UPDATE_USER_INFO_SUCCESS,
    payload: json,
});
  
export const updateUserInfoFailure = error => ({
    type: UPDATE_USER_INFO_FAILURE,
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
            options
            );
            let json = await response.json();
            const str = JSON.stringify(json);
            console.log("json=" + str);
            dispatch(getUserInfoSuccess(json));
        
        } catch (error) {
            console.log('ERROR=', error);
            dispatch(getUserInfoFailure(error));
        } 
    };
  };

  const initialPictureData = {
    uri: '',
    type: '',
    filename: '',
  };

  const createFormData = (photo, body) => {
    const data = new FormData();
  
    data.append("image", JSON.stringify({
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    }));
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  
    return data;
  }  

  export const uploadImageFetch = (token, pictureData) => {
     const data = new FormData();
    console.log("uploadImageFetch");
    const formData = createFormData(pictureData, {});
    data.append('image', pictureData);

    console.log("datas:", pictureData);
    const options = {
        method: 'POST',
        headers: {'Accept': 'application/json',
         'x-access-token' : token
        },
        body: data
       };
       console.log("datas =", formData);
    return async dispatch => {
        
        dispatch(uploadProfilePictureRequest());
        try {
            console.log("go to fetch")
            let response = await fetch(URL_BASE + "/users/picture", options);
            let json = await response.json();
            const str = JSON.stringify(json);
            console.log("json=" + str);
            dispatch(uploadProfilePictureSuccess(json));
        
        } catch (error) {
            console.log('ERROR=', error.message);
            dispatch(uploadProfilePictureFailure(error));
        } 
    };
  };

  userInit = {
      username: "",
      bio: ""
  };

export const updateUserInfoFetch = (token, data = userInit) => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'x-access-token' : token,
        },
        body: JSON.stringify(data)
       };
       console.log("datas =", data);
    return async dispatch => {
        
        dispatch(updateUserInfoRequest());
        try {
            console.log("go to fetch")
            let response = await fetch(URL_BASE + "/users/me/update", options);
            let json = await response.json();
            const str = JSON.stringify(json);
            console.log("json=" + str);
            dispatch(updateUserInfoSuccess(json));
        
        } catch (error) {
            console.log('ERROR=', error);
            dispatch(updateUserInfoFailure(error));
        } 
    };
};

export const refreshImage = (pictureData) => {
    console.log("refreshImage", "pictureData");
    return async dispatch => {
        dispatch(uploadProfilePictureRefresh(pictureData));
    }
};
  