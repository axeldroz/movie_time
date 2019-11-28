
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

import { removeUserToken } from '../redux/actions/auth/authActions'

class ProfileScreen extends Component {
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
      <View>
          <Text>Profile View !!!</Text>
          <Text>Here is the token : {token}</Text>
          <Button title="LOG OUT" onPress={ () => this.logout() }></Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state,
  };
};

export default connect(mapStateToProps, {removeUserToken})(ProfileScreen);