import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SearchBar, Icon, Avatar } from 'react-native-elements';

class topUser extends React.Component {
    render() {
        return (<View style={{ marginTop: "3%", flexDirection: "row", paddingLeft: "2%" }}>
            <Avatar
                rounded
                size="medium"
                source={{
                    uri: this.props.user.profile,
                }}
            />
            <View style={{ flexDirection: "column", marginLeft: "2%" }}>
                <Text style={{ marginTop: "2.8%", marginLeft: "2%", fontSize: 20 }}>{this.props.user.userName}</Text>
                <Text style={{ marginTop: "2.8%", marginLeft: "2%", fontSize: 16, color: "grey" }}>{this.props.user.name}</Text>
            </View>
        </View>)
    }
}

export default topUser;

