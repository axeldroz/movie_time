
/**
 * Created by Axel Drozdzynski on December 1st
 */

import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    Image,
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';

import { getUserToken, removeUserToken } from '../redux/actions/auth/authActions'
import { userInfoFetch } from '../redux/actions/mainActions'

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'ProfileScreen'
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.fetchUserInfo()
    //userInfoFetch(this.props.store["auth"].token);
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

  logout() {
    this.props.removeUserToken().then(() => {
      this.props.navigation.navigate('SignedOut');
    });
  }

  goTo(name) {
    this.props.navigation.navigate(name);
  }

  render() {
    const message = this.props.store['main']['infos'];
    const username = this.props.store['main']['username'];
    const created_date = this.props.store['main']['created_date'];
    console.log('message=', message); 

    return (
      <View style={styles.container}>
          <View style={styles.imageAndButtonContainer1}>
            <View style={styles.imageAndButtonContainer2}>            
                <View style={styles.logoutButtonContainer}>
                  <Button title="LOG OUT" 
                          onPress={ () => this.logout() }
                          style={styles.logoutButton}></Button>
                </View>
            
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri :'https://avatars2.githubusercontent.com/u/20972154?s=460&v=4'} }
                    style={styles.profileImage}
                  >
                  </Image>
                </View>

                <View style={styles.editProfileButtonContainer} >
                  <Button title="EDIT PROFILE" 
                    onPress={ () => this.goTo('EditProfileView') }
                    style={styles.editProfileButton}
                  ></Button>
            </View>
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>{ username }</Text>
              <Text style={styles.infoText}>This is my bio { username }</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Movies</Text>
              <Text style={styles.infoText}>{ created_date }</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: 20,
      marginLeft: 0,
      marginRight: 0,
  },
  imageAndButtonContainer1: {
    //backgroundColor: "blue",
    flexDirection: "column",
    alignItems: "center",
  },
  imageAndButtonContainer2: {
    flexDirection: "row",
    //backgroundColor: "red",
  },
  imageContainer: {
    flex: 2,
    //backgroundColor: 'yellow',
    alignItems: "center",
  },
  logoutButtonContainer: {
    flex: 2,
    //backgroundColor: 'orange',
    marginTop: 20,
    marginLeft: 0,
    paddingLeft: 0,
    width: 120,
  },
  editProfileButtonContainer: {
    flex: 2,
    //backgroundColor: 'orange',
    marginTop: 20,
    width: 120,
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
    marginLeft: 20,
    //backgroundColor: "blue"
  },
  editProfileButton: {
    marginTop: 50,
    //backgroundColor: "blue"
  },
  userInfoContainer: {
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    //backgroundColor: "red",
  },
  infoContainer: {
    marginTop: 25,
  },
  infoTitle: {
    fontSize: 20,
  },
  infoText: {
    marginTop: 5,
    fontSize: 18,
  }

});

const mapStateToProps = state => {
  return {
    store: state,
  };
};

export default connect(mapStateToProps, { removeUserToken, getUserToken, userInfoFetch })(ProfileScreen);