import React from 'react';
import { View, Text } from 'react-native';
import MyHeader from '../Components/Header';

class AddPost extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title="Instagram" navigationProps={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>AddPost</Text>
                </View>
            </View>
        );
    }
}

export default AddPost;