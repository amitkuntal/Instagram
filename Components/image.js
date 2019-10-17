import React from 'react';
import { View,Image,ActivityIndicator } from 'react-native';


export default class image extends React.Component {
    render() {
      return (
        <View style={{width:"100%",height:300,marginTop:"1%"}}>
            <Image
            source={{ uri: 'https://picsum.photos/id/237/200/300' }}
            style={{ width: "100%", height: "100%" }}
            PlaceholderContent={<ActivityIndicator />}
            />
        </View>
      );
    }
  }