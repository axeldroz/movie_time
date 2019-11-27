/**
 * Created by Axel Drozdzynski on November 23th
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { Provider, connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import axios from 'axios';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import { relative } from 'path';

import LoginScreen from './src/screens/LoginScreen.js'
import NextScreen from './src/screens/NextScreen'
import reducer from './src/redux/reducers/reducer';
import { createAppContainer } from 'react-navigation';

const client = axios.create({
  baseURL: 'localhost:9000',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Component1Shell = () => {
  return <LoginScreen />;
};

const Component2Shell = () => {
  return <NextScreen />;
};

const Stack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Next: {
    screen: NextScreen
  }
});

const NavStack = createAppContainer(Stack);

export default class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <View style={styles.container}>
              <NavStack />
            </View>
        </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
});
