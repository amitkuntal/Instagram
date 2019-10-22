import React from 'react';
import { withNavigation } from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { DrawerActions } from 'react-navigation-drawer';

class AddPostHeader extends React.Component {


    onClose = () => {
        this.props.navigationProps.navigate('Home');
    }

    render() {
        return (
            <Header backgroundColor="white"
                leftComponent={
                    <TouchableOpacity onPress={this.onClose}>
                        <Icon name="close" type="ant-design" />
                    </TouchableOpacity>
                }
                centerComponent={{ text: this.props.title, style: { fontSize: 21, } }} />
        );
    }
}

export default withNavigation(AddPostHeader);