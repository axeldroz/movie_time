
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

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'ProfileScreen'
  };
  componentDidMount() {
  }



  render() {
    var token = token = this.props.store["login"]["token"]; 
    return (
      <View>
          <Text>Profile View !!!</Text>
    <Text>Here is the token : {token}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);