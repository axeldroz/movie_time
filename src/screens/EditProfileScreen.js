/**
 * Created by Axel Drozdzynski on December 1st
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text,
    Button,
    Dimensions,
    Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

import MTTextInput from '../components/MTTextInput';
import { getUserToken } from '../redux/actions/auth/authActions';
import { refreshImage, uploadImageFetch, updateUserInfoFetch } from '../redux/actions/mainActions'

let deviceWidth = Dimensions.get('window').width;

class EditProfileScreen extends Component {
  static navigationOptions = {
    title: 'Edit Profile'
  };

  constructor() {
    super();

    this.imagePick = ImagePicker;
    this.state = {
      avatarSource: null,
      videoSource: null,
      username: '',
      bio: '',
      name: ''
  }
  }

  componentDidMount() {
    console.log("store: ", this.props.store['main']);
    this.fetchUserInfo()
  }

  fetchUserInfo() {
    this.props.getUserToken().then(() => {
      const tokenSaved = this.props.store["auth"].token;
      console.log("DID MOUNT = " + tokenSaved);
      console.log("token=", tokenSaved);
      if (tokenSaved !== null) {
        console.log("OK555");
        this.props.userInfoFetch(tokenSaved);
      }
    })
    .catch(error => {
      console.log("ERROR" + error);
      this.setState({ error })
    })
  }

  receiveImage(source, base64, type_, filename) {
    console.log("receive");
    //this.props.store['main']['avatarSource'] = source;
    //this.props.store['main']['profilePictureUri'] = source;
    //this.props.store['main']['base64'] = base64;
    console.log("source=", source);
    var data2 = {
      uri: source,
      type: type_,
      name: filename,
    };
    console.log("data=", data2);
    this.props.refreshImage(data2);
  }

  editPressed() {
    const options = {
        title: 'Select Image',
        storageOptions: {
            skipBackup: true,
            path: 'images'
        }
    };

    const self = this;

    ImagePicker.showImagePicker(options, function (response) {
        //console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled photo picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          var source, temp;

          temp = response.data;
          if (Platform.OS === 'android') {
            source = {uri: response.uri, isStatic: true};
          } else {
            source = {uri: response.uri.replace('file://', ''), isStatic: true};
          }
          console.log("source = ", source)
          this.receiveImage(source, temp, response.type, response.fileName);
          //console.log("avatarSource", source);
          //console.log("base64", temp);
        }
    }.bind(this) );
}

send() {
  console.log("Send !!");
  this.props.getUserToken().then(() => {
    const tokenSaved = this.props.store["auth"].token;
    console.log("DID MOUNT = " + tokenSaved);
    console.log("token=", tokenSaved);
    if (tokenSaved !== null) {
      console.log("OK555");
      var token = tokenSaved
      const base64 = this.props.store['main']['profilePictureBase64'];
      const uri = this.props.store['main']['profilePictureUri'];
      const type_ = this.props.store['main']['profilePictureType'];
      const filename = this.props.store['main']['profilePictureFilename'];
      console.log("token=", token, "base64");
      console.log("filename", this.props.store['main'])
      var data = {
        uri: uri,
        type: type_,
        name: filename,
      };
      this.props.uploadImageFetch(token, data);
    }
  })
}

sendUpdateInfo(token) {
  console.log("token:", token);
  var username = this.props.store['main']['username'];
  var bio = this.props.store['main']['bio'];

  username = (this.state.username != '') ? this.state.username : username;
  bio = (this.state.bio != '') ? this.state.bio : bio;
  data = {
    username: username,
    bio: bio
  }
  this.props.updateUserInfoFetch(token, data);
}

  render() {
    var token = this.props.store["auth"].token;
    const imageUri = (this.props.store['main']['profilePictureUri'] != '' && this.props.store['main']['profilePictureUri'] != undefined) 
    ? this.props.store['main']['profilePictureUri'] : 'https://avatars2.githubusercontent.com/u/20972154?s=460&v=4';
    const username = this.props.store['main']['username'];
    const bio = this.props.store['main']['bio'];
    console.log("username : ", username);
    console.log("Token : ", token);
 //console.log("===> imageUri = ", imageUri)
 //   console.log("imagePRops:", this.props.store['main'])
    return (
      <View style={styles.container}>
          <View style={styles.imageAndButtonContainer1}>
            <View style={styles.imageAndButtonContainer2}>            
                <View style={styles.imageContainer}>
                  <Image
                    source={ {uri : imageUri } }
                    style={styles.profileImage}
                  >
                  </Image>
                </View>

                <View style={styles.editPictureButtonContainer} >
                  <Button title="EDIT PICTURE" 
                    style={styles.editPictureButton}
                    onPress={ this.editPressed.bind(this) }
                  /> 
                <Button title="SEND" 
                    onPress={ this.send.bind(this) } />
            </View>
            </View>
          </View>
          <View style={styles.line1}>
            <View style={extraStyle.line} />
          </View>
            
          <View style={styles.userInfos}>
            <MTTextInput placeholder="username"
                        onChangeText={(text) => this.setState( { username: text } )}
                        style={styles.textField}
                        defaultValue={ username } />
            
            <MTTextInput placeholder="name"
                        onChangeText={(text) => this.setState( { name: text } )}
                        style={styles.textField} />
            
            <MTTextInput placeholder="bio"
                        onChangeText={(text) => this.setState( { bio: text } )}
                        style={styles.textField}
                        defaultValue={ bio } />
          </View>

          <View style={styles.line1}>
            <View style={extraStyle.line} />
          </View>

          <Text>Edit Profile View !!!</Text>
  <Text>Here is the token : {token} bio : {bio}, username : {username}</Text>

          <View style={styles.saveButtonContainer1}>
            <View style={styles.saveButtonContainer}>
              <Button title="SAVE" onPress={ () => this.sendUpdateInfo(token) }></Button>
            </View>
          </View>

      </View>
    );
  }
}

const extraStyle = StyleSheet.create({
  line: {
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
  }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: 500,
        marginTop: 20,
        marginLeft: 0,
        marginRight: 0,
    },
    saveButtonContainer1 : {
      position: "absolute",
      bottom: 15,
      width: deviceWidth,
      alignItems: "center"
    },
    saveButtonContainer: {
      flexDirection: "row",
      bottom: 0,
      //backgroundColor: "red",
    },
    imageAndButtonContainer1: {
      //backgroundColor: "blue",
      flexDirection: "column",
      //alignItems: "center",
      paddingLeft: 20,
    },
    imageAndButtonContainer2: {
      flexDirection: "row",
      //backgroundColor: "red",
      alignItems: "center"
    },
    imageContainer: {
      //backgroundColor: 'yellow',
      alignItems: "center",
    },
    editPictureButtonContainer: {
      //backgroundColor: 'orange',
      marginTop: 0,
      marginLeft: 10,
      width: 140,
    },
    profileImage: {
      marginTop: 0,
      width: 120, 
      height: 120,
      borderRadius: 60,
      borderColor: 'black',
      borderWidth: 0.5,
  
    },
    logoutButton: {
      marginTop: 50,
      marginLeft: 0,
      //backgroundColor: "blue"
    },
    editProfileButton: {
      marginTop: 50,
      //backgroundColor: "blue"
    },
    line1: {
      marginTop: 10
    },
    userInfos: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    textField: {
      marginTop: 5,
    }
});

const mapStateToProps = state => {
  return {
    store: state,
  };
};

export default connect(mapStateToProps, {getUserToken, refreshImage, uploadImageFetch, updateUserInfoFetch})(EditProfileScreen);