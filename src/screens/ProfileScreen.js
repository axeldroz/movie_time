
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

    return (
      <View>
          <Text>Profile View !!!</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);