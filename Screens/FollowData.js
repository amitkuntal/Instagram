import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Followers from '../Components/Followers';
import Following from '../Components/Following';

const TabNavigator = {
    Followers: {
        screen: Followers,
        defaultNavigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                header: null,
                scrollEnabled: true,
            }
        })
    },
    Following: {
        screen: Following,
        defaultNavigationOptions: () => ({
            tabBarOptions: {
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                header: null,
                scrollEnabled: true,
            }
        })
    },
}

const NavBar = createMaterialTopTabNavigator(
    TabNavigator,
    {
        initialRouteName: 'Followers',
        backBehaviour: 'initialRoute',
    }
);

const FollowData = createAppContainer(NavBar);
export default FollowData;
