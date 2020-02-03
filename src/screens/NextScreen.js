
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
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