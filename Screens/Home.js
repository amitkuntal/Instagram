import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../Components/Header';

class Home extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title="Instagram" />
                <Text style={{
                    textAlign: "center",
                }}>HomePage</Text>
            </View>
        );
    }
}

export default Home;