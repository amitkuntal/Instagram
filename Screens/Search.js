import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {SearchBar,Icon,Avatar} from 'react-native-elements';
import User from './../Components/topUser'


class Search extends React.Component {
    state = {
        search: '',
        topUsers:[{name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        {name:"name",profile:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",},
        ]
      };
      updateSearch = search => {
        this.setState({ search });
      };

      

    render() {
        const {search,topUsers} = this.state;
        return (
           
            <View>
                <View style={{marginTop:"5%"}}>
                <SearchBar
                round="true"
                lightTheme="true"
                searchIcon ={{size:40}}
                placeholder="Search"
                onChangeText={this.updateSearch}
                value={search}
                platform="android"
            />
            </View>
             <View style={{height:"88%"}}>
            <FlatList data={topUsers}
                        renderItem={({item})=> {
                        return <User user={item}/>}}>
                    
            </FlatList>
                
                </View>
            </View>
        );
    }
}

export default Search;