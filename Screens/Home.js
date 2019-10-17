import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import MyHeader from '../Components/Header';

import Post from './../Components/post';

class Home extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title="Instagram" />
                    <View style={{height:"100%"}}>
                        <FlatList data={[1,2,4,5,6]}
                        renderItem={({Item})=><Post />}>
                    </FlatList>
                </View>
            </View>
        );
    }
}

export default Home;