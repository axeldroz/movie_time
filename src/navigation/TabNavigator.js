/**
 * Created by Axel Drozdzynski on November 27th 2019
 */

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import FeedScreen from '../screens/FeedScreen';
import ProfileStack from './ProfileStackNavigator';
import AddMovieStack from './AddMovieStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';  

/**
 * It's the SignedIn view
 */
const Tabs = createBottomTabNavigator({
    Feed: {
      screen: FeedScreen,
      navigationOptions:{
        tabBarLabel: "Home",
        tabBarIcon: ({tintColor})=>(  
            <Icon name="ios-home" color={tintColor} size={25}/>  
        )
      }  
    },
    NewMovie: {
      screen: AddMovieStack,
      navigationOptions:{
        tabBarLabel: "Movie",
        tabBarIcon:({tintColor})=>(  
            <Icon name="md-headset" color={tintColor} size={25}/>  
        )  
      }  
    },
    Profile: {
        screen: ProfileStack,
        navigationOptions:{
          tabBarLabel: "Profile",
          tabBarIcon:({tintColor})=>(  
              <Icon name="ios-contact" color={tintColor} size={25}/>  
          )  
        }  
      },
  });

export default createAppContainer(Tabs);