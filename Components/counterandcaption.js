import React from 'react';
import { Text, View } from 'react-native';

export default class counterAndCaption extends React.Component {
  render() {
    return (
      <View style={{ flex: .16 }}>
        <Text style={{ marginLeft: "2%", marginRight: "2%" }}>{this.props.cText}</Text>
      </View>
    );
  }
}
