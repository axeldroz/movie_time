/**
 * Created by Axel Drozdzynski on November 28th 2019
 */

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Tabs from './TabNavigator'
import LoginScreen from '../screens/LoginScreen.js'
import NextScreen from '../screens/NextScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
});

export default createAppContainer(Stack);