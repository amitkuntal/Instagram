import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import MyHeader from '../Components/Header';


class Profile extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title="user_name" />
                <Text style={{
                    textAlign: "center",
                }}>ProfilePage</Text>
            </View >
        );
    }
}

export default Profile;