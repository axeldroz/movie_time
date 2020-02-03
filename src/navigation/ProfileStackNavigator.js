/**
 * Created by Axel Drozdzynski on November 30th 2019
 */

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const ProfileStack = createStackNavigator({
  ProfileView: {
    screen: ProfileScreen
  },
  EditProfileView: {
    screen: EditProfileScreen
  },
});

export default createAppContainer(ProfileStack);