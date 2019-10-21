import React from 'react';
import { View, FlatList } from 'react-native';
import MyHeader from '../Components/Header';
import Post from '../Components/Post';

class Home extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title="Instagram" navigationProps={this.props.navigation} />
                <View style={{ marginTop: "3%", marginBottom: "7%" }}>
                    <FlatList data={[1, 2, 4, 5, 6]}
                        renderItem={({ Item }) => <Post navigation={this.props.navigation} />}>
                    </FlatList>
                </View>
            </View>
        );
    }
}

export default Home;