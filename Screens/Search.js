import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SearchBar, Icon, Avatar, Divider } from 'react-native-elements';
import User from './../Components/topUser'


class Search extends React.Component {

    static navigationOptions = {
        drawerLockMode: 'locked-closed',
    }

    state = {
        search: '',
        topUsers: [{ name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        { name: "name", userName: "User_NAme", profile: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg", },
        ]
    };
    updateSearch = search => {
        this.setState({ search });
    };



    render() {
        const { search, topUsers } = this.state;
        return (

            <View>
                <View style={{ marginTop: "5%" }}>
                    <SearchBar
                        round="true"
                        lightTheme="true"
                        searchIcon={{ size: 40 }}
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={search}
                        platform="android"
                    />
                </View>
                <Divider style={{ marginTop: "1%" }} />
                <View style={{ height: "88%" }}>
                    <FlatList data={topUsers}
                        renderItem={({ item }) => {
                            return <User user={item} />
                        }}>

                    </FlatList>

                </View>
            </View>
        );
    }
}

export default Search;