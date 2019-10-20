import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default class commentAndLike extends React.Component {
    render() {
        const {navigate,state} = this.props.navigation;
      return (
        <View style={{flex: .16,
            flexDirection: 'row'}}>
                <View>
                <Button
                    type="clear"
                    icon={
                        <Icon
                        name="heart-o"
                        type="font-awesome"
                        size={30}
                        color="black"
                        />
                    }
                    />
                </View>
                <View>
                <Button
                    type="clear"
                    icon={
                        <Icon
                        name="comment"
                        type="evilicon"
                        size={40}
                        color="black"
                        />
                    }
                    onPress={() => this.props.navigation.navigate('comment',{ go_back_key: state.key })}
                   
                    />
                </View>
                    
            </View>
      );
    }
  }
