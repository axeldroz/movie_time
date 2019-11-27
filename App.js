/**
 * Created by Axel Drozdzynski on November 23th
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { Provider, connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
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

import reducer from './src/redux/reducers/reducer';
import NavStack from './src/navigation/StackNavigator'

const client = axios.create({
  baseURL: 'localhost:9000',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

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
