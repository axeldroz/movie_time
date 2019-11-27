
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

import Tabs from '../navigation/TabNavigator'

class MainScreen extends Component {
  static navigationOptions = {
    title: 'MainScreen'
  };
  componentDidMount() {
  }
  render() {

    return (
      <View>
        <Tabs />
      </View>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);