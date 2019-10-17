import React from 'react';
import {Text, View} from 'react-native';

export default class counterAndCaption extends React.Component {
    render() {
      return (
        <View style={{flex: .16,
            flexDirection: 'column'}}>
            <Text style={{paddingTop:".5%",marginLeft:"2%"}}>47 Likes</Text>
            <Text style={{marginLeft:"2%",marginRight:"2%"}}></Text>
        </View>
      );
    }
  }
