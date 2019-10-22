import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Icon, Header } from 'react-native-elements'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import * as Expo from 'expo';




const client = new ApolloClient({
  uri: 'https://instagramclonemountblue.herokuapp.com/v1/graphql'

});



import Home from './Screens/Home';
import Liked from './Screens/Liked';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import AddPost from './Screens/AddPost';
import Comments from './Screens/Comments';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import FollowData from './Screens/FollowData';
import CustomHeader from './Components/CustomHeader';
// import SettingsNav from './Screens/Settings';

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

const TabNav = createAppContainer(createBottomTabNavigator(TabNavigator, NavOptions))

const DrawerNavigatorExample = createDrawerNavigator(
  {
    Screen1: {
      screen: TabNav,
      navigationOptions: {
      drawerLabel: 'App',
      drawerLabel: () => null,
      },
    },

    Screen2: {
      screen: Login,
      navigationOptions: {
        drawerIcon: () => (<Icon name='ios-person-add' type='ionicon' size={25} />),
        drawerLabel: 'Add Account',
      },
    },

    Screen3: {
      screen:SignUp,
      navigationOptions: {
        drawerIcon: () => (<Icon name='power' type='feather' size={25} />),
        drawerLabel: 'LogOut',
      },
    },
  },
  {
    contentComponent: (props) => (<CustomHeader {...props} />),
    drawerWidth: 300,
    drawerPosition: 'right',
    contentOptions: {
      labelStyle: {
        fontSize: 18,
      },
    },
  }
);

const Main = createAppContainer(DrawerNavigatorExample);

const App = createSwitchNavigator(
  {
   
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Main: {
      screen: Main,
    },
    comment: {
      screen: Comments,
      backBehaviour: 'history',
    },
    followData: {
      screen: FollowData,
      backBehaviour: 'history',
    },
  },
  {
    style: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
    }
  }
);

const AppContainer = createAppContainer(App)
export default class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer/>
      </ApolloProvider>
    )
  }
}
// export default createAppContainer(App);
// AppRegistry.registerComponent('MyApp', () => Root)
Expo.registerRootComponent(Root)
