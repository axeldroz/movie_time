/**
 * Created by Axel Drozdzynski on November 27th 2019
 */

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Tabs from './TabNavigator';
import LoginScreen from '../screens/LoginScreen.js';
import NextScreen from '../screens/NextScreen';

const Stack = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Next: {
    screen: NextScreen
  },
  Main: {
    screen: Tabs
  }
});

export default createAppContainer(Stack);