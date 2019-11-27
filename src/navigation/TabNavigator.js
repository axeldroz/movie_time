import { TabNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen.js'
import NextScreen from '../screens/NextScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';

const Tabs = createBottomTabNavigator({
    Login: {
      screen: LoginScreen
    },
    Profile: {
      screen: NextScreen
    }
  });

  export default createAppContainer(Tabs);