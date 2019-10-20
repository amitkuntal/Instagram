import React from 'react';
import ViewNav from '../Components/ViewNav';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Grid from '../Components/Grid';
import List from '../Components/List';

const TabNavigator = {
    Grid: Grid,
    List: List,
}

const NavBar = createMaterialTopTabNavigator(
    TabNavigator,
    {
        tabBarComponent: props => <ViewNav {...props} />,
    },
    {
        initialRouteName: 'Grid',
        backBehaviour: 'initialRoute',
    }
);

const Profile = createAppContainer(NavBar);
export default Profile;
