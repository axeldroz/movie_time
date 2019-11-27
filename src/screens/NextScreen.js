
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

class NextScreen extends Component {
  static navigationOptions = {
    title: 'NextScreen'
  };
  componentDidMount() {
  }
  render() {

    return (
      <View>
        <Text>IS OK !!!</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(NextScreen);