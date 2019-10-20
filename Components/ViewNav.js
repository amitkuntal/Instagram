import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { Avatar, Icon, Divider } from 'react-native-elements';
import _ from 'lodash';
import MyHeader from '../Components/Header';

const styles = StyleSheet.create({
    counterElem: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
});


class ViewNav extends React.Component {

    render() {
        const {navigate,state} = this.props.navigation;
        console.log(state.key)
        return (
            <SafeAreaView>
                <MyHeader title="user_name" />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: '5%',
                }}>
                    <View style={{
                        marginRight: '8%',
                    }}>
                        <Avatar rounded size="large" title="User's Name" source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }} />
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around", marginTop: "5%" }}>
                        <View style={styles.counterElem, { textAlign: "center" }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18, }}>12</Text>
                            <Text>Posts</Text>
                        </View>
                        <View style={styles.counterElem, { textAlign: "center" }}>
                            <Text onPress={() => (this.props.navigation.navigate('followData',{ go_back_key: state.key }))}
                                style={{ fontWeight: "bold", fontSize: 18, }}>180</Text>
                            <Text onPress={() => (this.props.navigation.navigate('followData',{ go_back_key: state.key }))}>Followers</Text>
                        </View>
                        <View style={styles.counterElem, { textAlign: "center" }}>
                            <Text onPress={() => (this.props.navigation.navigate('followData',{ go_back_key: state.key }))}
                                style={{ fontWeight: "bold", fontSize: 18, }}>230</Text>
                            <Text onPress={() => (this.props.navigation.navigate('followData',{ go_back_key: state.key }))}>Following</Text>
                        </View>
                    </View>
                </View>
                <Text style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    marginLeft: '4%',
                }}>User's Name</Text>
                <Text style={{ marginLeft: '4%' }}>BIoBIoB IoBIoBIoB IoBIoBIo BIoBIo</Text>
                <Divider marginTop={'2%'} />
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    margin: '2%',
                }}>
                    <Icon onPress={() => (this.props.navigation.navigate('Grid'))}
                        name='apps' type='material' size={30} />

                    <Icon onPress={() => {
                        return this.props.navigation.navigate('List');
                    }} name='format-list-bulleted' type='material-community' size={30} />
                </View>
                <Divider />
            </SafeAreaView >
        );
    }
}

export default ViewNav;
