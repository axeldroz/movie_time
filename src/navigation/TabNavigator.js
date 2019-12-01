/**
 * Created by Axel Drozdzynski on November 27th 2019
 */

import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen'
import FeedScreen from '../screens/FeedScreen'
import ProfileStack from './ProfileStackNavigator'

/**
 * It's the SignedIn view
 */
const Tabs = createBottomTabNavigator({
    Feed: {
      screen: FeedScreen
    },
    Profile: {
        screen: ProfileStack
      },
  });

export default createAppContainer(Tabs);