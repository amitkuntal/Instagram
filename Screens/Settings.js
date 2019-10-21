import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Login';
import SignUp from './SignUp';

const FirstActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Main: {
        screen: SignUp,
        static navigationOptions = {
            drawerLockMode: 'locked-closed',
        }
    },
});

const Second_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    Main: {
        screen: Login,
        static navigationOptions = {
            drawerLockMode: 'locked-closed',
        }
    },
});

const DrawerNavigatorExample = createDrawerNavigator(
    {
        Screen1: {
            screen: FirstActivity_StackNavigator,
            navigationOptions: {
                drawerIcon: () => (<Icon name='ios-person-add' type='ionicon' size={25} />),
                drawerLabel: 'Add Account',
                contentOptions: {
                    labelStyle: {
                        fontSize: 24,
                    },
                },
            },
        },

        Screen2: {
            screen: Second_StackNavigator,
            navigationOptions: {
                drawerIcon: () => (<Icon name='power' type='feather' size={25} />),
                drawerLabel: 'LogOut',
                contentOptions: {
                    labelStyle: {
                        fontSize: 24,
                    },
                },
            },
        },
    },
    {
        drawerWidth: 300,
        drawerPosition: 'right',
    }
);

export default createAppContainer(DrawerNavigatorExample);