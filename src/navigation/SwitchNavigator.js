/**
 * Created by Axel Drozdzynski on November 28th 2019
 */

import { createSwitchNavigator } from 'react-navigation'
import { createAppContainer } from 'react-navigation';

import AuthLoading from '../screens/AuthLoadingScreen'
import Tabs from './TabNavigator';
import RegisterStack from './RegisterStackNavigator'

const SwitchNav = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        SignedIn: Tabs,
        SignedOut: RegisterStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(SwitchNav);