
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
          <Text>Profile View !!!</Text>
          <Text>Here is the token : {}</Text>
          <Button title="LOG OUT" onPress={ () => this.logout() }></Button>
          <Button title="EDIT PROFILE" onPress={ () => this.goTo('EditProfileView') }></Button>
          <Text>Username : { username }</Text>
          <Text>Created date : { created_date }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop: 100,
      marginLeft: 0,
      marginRight: 0,
  },
});

const mapStateToProps = state => {
  return {
    store: state,
  };
};

export default connect(mapStateToProps, { removeUserToken, getUserToken, userInfoFetch })(ProfileScreen);