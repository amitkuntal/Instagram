import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CameraView from '../Components/CameraView';
import GalleryView from '../Components/GalleryView';

const TabNavigator = {
    Camera: CameraView,
    Gallery: GalleryView,
};

const NavOptions = {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            let iconType;
            if (routeName === 'Camera') {
                iconName = `camera${focused ? '' : '-off'}`;
                iconType = 'feather';
            } else if (routeName === 'Gallery') {
                iconName = 'picture-o';
                iconType = 'font-awesome';
            }

            return <Icon name={iconName} type={iconType} size={25} color={tintColor} />;
        },
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'grey',
            showLabel: false,
            indicatorStyle: {
                backgroundColor: 'black',
            },
        }
    }),
};

const BottomNav = createBottomTabNavigator(TabNavigator, NavOptions);

const AddPost = createAppContainer(BottomNav);

export default AddPost;