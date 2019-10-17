import React from 'react';
import { Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements'

class MyHeader extends React.Component {
    render() {
        return (
            <Header backgroundColor="white"
                leftComponent={<View style={{ textAlign: "center" }}>
                    <Text numberOfLines={1} style={{ fontSize: 24, overflow: "visible" }}>
                        {this.props.title}
                    </Text></View>
                }
                rightComponent={<Icon name="menu" type="simple-line-icon" />}
            />
        );
    };
}

export default MyHeader;