
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

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