import { TabNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen'
import FeedScreen from '../screens/FeedScreen'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';

const Tabs = createBottomTabNavigator({
    Profile: {
      screen: ProfileScreen
    },
    Feed: {
      screen: FeedScreen
    }
  });

  export default createAppContainer(Tabs);