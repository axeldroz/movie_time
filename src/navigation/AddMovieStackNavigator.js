/**
 * Created by Axel Drozdzynski on February 1st 2020
 */

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import AddMovieScreen from '../screens/AddMovieScreen';

const AddMovieStack = createStackNavigator({
  AddMovieScreen: {
    screen: AddMovieScreen
  },
  Profile: {
    screen: ProfileScreen
  },
});

export default createAppContainer(AddMovieStack);