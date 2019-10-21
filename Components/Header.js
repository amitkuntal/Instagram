import React from 'react';
import { withNavigation } from 'react-navigation'
import { Text, View, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import { DrawerActions } from 'react-navigation-drawer'

class MyHeader extends React.Component {

    toggleDrawer = () => {
        //Props to open/close the drawer
        console.log(this.props)
        this.props.navigationProps.dispatch(DrawerActions.toggleDrawer());
    };

    render() {
        return (
            <Header backgroundColor="white" rightComponent={
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Icon name="menu" type="simple-line-icon" />
                </TouchableOpacity>

            }>
                {/* onPress={() => (console.log(this.props))} />}> */}
                <Text style={{ fontSize: 28, width: 400 }}>{this.props.title}</Text>
            </Header>
        );
    };
}

export default withNavigation(MyHeader);