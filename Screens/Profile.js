import React from 'react';
import { AsyncStorage } from 'react-native';
import ViewNav from '../Components/ViewNav';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

import Grid from '../Components/Grid';
import List from '../Components/List';

const GET_USER = gql`
query getUser($User_id: String!) {
  User(where: {User_id: {_eq: $User_id}}) {
      Profile
      User_id
      User_Name
      PhoneNumber 
      Name
      Email
      Post
      Follower
      Following
  }
  Post(where: {User_id: {_eq: $User_id}}) {
    Post_id
    Image
    Caption
    User_id
     User{
      Name
      User_id
      Profile
    }
  }
}`;


export default function Root() {

    const [getUser, { loading, data }] = useLazyQuery(GET_USER);
    const [posts, setPosts] = React.useState([]);
    if (loading) {
        console.log("null");
    }

    React.useEffect(() => {
        if (data) {
            setPosts(data)
        }
    }, [data])



    React.useEffect(() => {
        AsyncStorage.getItem("userId").then(data => {
            getUser({ variables: { User_id: data } })
        })

    }, [])
    if (data) {
        const TabNavigator = {
            Grid: { screen: props => <Grid data={data} {...props} color="#fff" /> },
            List: { screen: props => <List data={data} {...props} color="#fff" /> },
        }

        const NavBar = createMaterialTopTabNavigator(
            TabNavigator,
            {
                tabBarComponent: props => <ViewNav {...props} datum={data} />,
            },
            {
                initialRouteName: 'Grid',
                backBehaviour: 'initialRoute',
            }
        );

        const Profile = createAppContainer(NavBar);
        return (
            <Profile />
        )
    }
    return (<></>)

}

