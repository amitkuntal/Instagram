import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class postHeader extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <View style={{
        flex: .1,
        flexDirection: 'row', paddingLeft: "2%"
      }}>
        <Avatar
          rounded
          size="small"
          source={{
            uri: this.props.userData.Profile,
          }}
        />
        <Text style={{ fontWeight: 'bold', paddingLeft: "3%", paddingTop: "1%" }} >{this.props.userData.Name}</Text>
      </View>
    );
  }
}
