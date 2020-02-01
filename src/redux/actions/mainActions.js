import {
    URL_BASE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    UPLOAD_PROFILE_PICTURE_REQUEST,
    UPLOAD_PROFILE_PICTURE_REFRESH,
    UPLOAD_PROFILE_PICTURE_SUCCESS,
    UPLOAD_PROFILE_PICTURE_FAILURE,
  } from './types';
  
  //const url = 'https://randomuser.me//api/?results=${nb}&page=1';
  
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
            //'http://localhost:3000/api/v1/users/me' // for iOS
            options
            );
            let json = await response.json();
            const str = JSON.stringify(json);
            //console.error('json' + str);
            //var str = JSON.stringify(json, null, 2);
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
  
    data.append("photo", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  
    return data;
  }  

  export const uploadImageFetch = (token, pictureData) => {
    // const data = new FormData();
    // data.append('name', 'avatar');
    // data.append('fileData', pictureData['base64']);
    console.log("uploadImageFetch");
    const formData = new FormData();
    pictureData.name = "Hello.jpg"
    pictureData.uri = "file:/" + pictureData.uri
    formData.append('image', pictureData);
    console.log("datas:", formData);
    const options = {
        method: 'POST',
        headers: {
         'x-access-token' : token,
        },
        body: {test : "test"}
       };
       console.log("datas =", pictureData);
    return async dispatch => {
        
        dispatch(uploadProfilePictureRequest());
        try {
            console.log("go to fetch")
            let response = await fetch(URL_BASE + "/users/picture", options);
            let json = await response.json();
            const str = JSON.stringify(json);
            //console.error('json' + str);
            //var str = JSON.stringify(json, null, 2);
            console.log("json=" + str);
            dispatch(uploadProfilePictureSuccess(json));
        
        } catch (error) {
            console.log('ERROR=', error);
            dispatch(uploadProfilePictureFailure(error));
        } 
    };
  };

export const refreshImage = (pictureData) => {
    console.log("refreshImagfe", "pictureData");
    return async dispatch => {
        dispatch(uploadProfilePictureRefresh(pictureData));
    }
};
  