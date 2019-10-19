import React from 'react';
import { Text, View } from 'react-native';
import {Avatar} from 'react-native-elements';

export default class postHeader extends React.Component {
    render() {
      
      return (
        <View style={{flex: .1,
            flexDirection: 'row',paddingLeft:"2%"}}>
                <Avatar
                    rounded
                    size="small"
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                    />
                    <Text style={{paddingLeft:"3%",paddingTop:"1%"}} >User Name</Text>
            </View>
      );
    }
  }
