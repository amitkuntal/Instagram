import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Followers from '../Components/Followers';
import Following from '../Components/Following';


const TabNavigator = {
    Followers: Followers,
    Following: Following,
}


const NavBar = createMaterialTopTabNavigator(

    TabNavigator,
    {
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: 'black',
            },
            style: {
                backgroundColor: 'white',
            },
            labelStyle: {
                color: 'black',
                fontSize: 20,
            }
        },
        initialRouteName: 'Followers',
        backBehaviour: 'history',
    },
    {
        backBehaviour: 'history',
    }
);

const FollowData = createAppContainer(NavBar);
export default FollowData;
