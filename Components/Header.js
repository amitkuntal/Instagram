import React from 'react';
import { Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements'

class MyHeader extends React.Component {
    render() {
        return (
            <Header backgroundColor="white" rightComponent={<Icon name="menu" type="simple-line-icon" />}>
            <Text style={{fontSize:28,width:400}}>{this.props.title}</Text>    
            </Header>
        );
    };
}

export default MyHeader;