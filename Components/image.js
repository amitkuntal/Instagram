import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';


export default class image extends React.Component {
  render() {
    // console.log(`${this.props.src}`);
    return (
      <View style={{ width: "100%", height: 370, marginTop: "1%" }}>
        <Image
          source={{ uri: this.props.src }}
          style={{ width: "100%", height: "100%" }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    );
  }
}