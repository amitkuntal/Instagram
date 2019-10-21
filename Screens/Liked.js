import React from 'react';
import { View, FlatList } from 'react-native';
import MyHeader from '../Components/Header';
import Grid from '../Components/Grid';

class Liked extends React.Component {
    render() {
        return (
            <View>
                <MyHeader title="Liked Posts" navigationProps={this.props.navigation} />
                <View style={{ marginBottom: "9%" }}>
                    <Grid navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

export default Liked;