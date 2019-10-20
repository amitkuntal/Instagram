import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';


export default class image extends React.Component {
  render() {
    return (
      <View style={{ width: "100%", height: 400, marginTop: "1%" }}>
        <Image
          source={{ uri: 'https://picsum.photos/536/354' }}
          style={{ width: "100%", height: "100%" }}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>
    );
  }
}