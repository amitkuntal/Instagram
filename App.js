import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';


import Home from './Screens/Home';
import Liked from './Screens/Liked';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import AddPost from './Screens/AddPost';
import Comments from './Screens/Comments';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

const TabNavigator = {
  Home: Home,
  Search: Search,
  AddPost: AddPost,
  Liked: Liked,
  Profile: Profile,
};

const NavOptions = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      let iconType;
      if (routeName === 'Home') {
        iconName = `home-variant${focused ? '' : '-outline'}`;
        iconType = 'material-community';
      } else if (routeName === 'Search') {
        iconName = `${focused ? 'md' : 'ios'}-search`;
        iconType = 'ionicon';
      } else if (routeName === 'Liked') {
        iconName = `heart${focused ? '' : '-o'}`;
        iconType = 'font-awesome'
      } else if (routeName === 'AddPost') {
        iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        iconType = 'ionicon';
      } else if (routeName === 'Profile') {
        iconName = `user${focused ? '' : '-o'}`;
        iconType = 'font-awesome';
      }

      return <Icon name={iconName} type={iconType} size={25} />;
    },
    tabBarOptions: {
      showLabel: false,
    }
  }),
};

const TabNav =createBottomTabNavigator(TabNavigator, NavOptions)
const stack =createStackNavigator({
  comment: {
    screen: Comments,
    navigationOptions: {
      header: null,
    },
  },
  
});
const App = createSwitchNavigator({
  Login:{
    screen:Login
  },
  SignUp:{
    screen:SignUp
  },
  App: {
    screen: TabNav,
  },
  Comments: {
    screen: stack,
  },
});

export default createAppContainer(App);

