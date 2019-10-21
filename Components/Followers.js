import React from 'react';
import { Text, View, } from 'react-native';
import { Avatar } from 'react-native-elements';

class Followers extends React.Component {

    render() {
        return (<View style={{ marginTop: "3%", flexDirection: "row", paddingLeft: "2%" }}>
            <Avatar
                rounded
                size="medium"
                source={{
                    uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                }}
            />
            <View style={{ flexDirection: "column", marginLeft: "2%" }}>
                <Text style={{ marginTop: "2.8%", marginLeft: "2%", fontSize: 20 }}>UserNAme</Text>
                <Text style={{ marginTop: "2.8%", marginLeft: "2%", fontSize: 16, color: "grey" }}>user's Name</Text>
            </View>
        </View>)
    }
}

export default Followers;