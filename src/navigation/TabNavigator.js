/**
 * Created by Axel Drozdzynski on November 27th 2019
 */

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen'
import FeedScreen from '../screens/FeedScreen'

const Tabs = createBottomTabNavigator({
    Feed: {
      screen: FeedScreen
    },
    Profile: {
        screen: ProfileScreen
      },
  });

  export default createAppContainer(Tabs);