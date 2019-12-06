
import React, { Component } from 'react';
//import { View, Text } from 'react-native';
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
    Image
} from 'react-native';

import MTTextInput from '../components/MTTextInput';

import { removeUserToken } from '../redux/actions/auth/authActions';

let deviceWidth = Dimensions.get('window').width;

class EditProfileScreen extends Component {
  static navigationOptions = {
    title: 'ProfileScreen'
  };
  componentDidMount() {
  }

  logout() {
    this.props.removeUserToken().then(() => {
      this.props.navigation.navigate('SignedOut');
    });
  }

  render() {
    var token = token = this.props.store["login"]["token"]; 
    return (
      <View style={styles.container}>
          <View style={styles.imageAndButtonContainer1}>
            <View style={styles.imageAndButtonContainer2}>            
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri :'https://avatars2.githubusercontent.com/u/20972154?s=460&v=4'} }
                    style={styles.profileImage}
                  >
                  </Image>
                </View>

                <View style={styles.editPictureButtonContainer} >
                  <Button title="EDIT PICTURE" 
                    onPress={ () => this.goTo('EditProfileView') }
                    style={styles.editPictureButton}
                  ></Button>
            </View>
            </View>
          </View>
          <View style={styles.line1}>
            <View style={extraStyle.line} />
          </View>
            
          <View style={styles.userInfos}>
            <MTTextInput placeholder="username"
                        onChangeText={console.log("ok")}
                        style={styles.textField} />
            
            <MTTextInput placeholder="bio"
                        onChangeText={console.log("ok")}
                        style={styles.textField} />
          </View>

          <View style={styles.line1}>
            <View style={extraStyle.line} />
          </View>

          <Text>Edit Profile View !!!</Text>
          <Text>Here is the token : {token}</Text>

          <View style={styles.saveButtonContainer1}>
            <View style={styles.saveButtonContainer}>
              <Button title="SAVE" onPress={ () => this.logout() }></Button>
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
      bottom: 0,
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

export default connect(mapStateToProps, {removeUserToken})(EditProfileScreen);