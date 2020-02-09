/**
 * Created by Axel Drozdzynski on November 23th
 */

import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {
  StyleSheet,
  View,
} from 'react-native';

import reducer from './redux/reducers/index'; // combineReducer
import SwitchNav from './navigation/SwitchNavigator'

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <View style={styles.container}>
              <SwitchNav />
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
