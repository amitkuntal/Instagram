import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default class commentAndLike extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                flex: .16,
                flexDirection: 'row'
            }}>
                <View>
                    <Button
                        type="clear"
                        icon={
                            <Icon
                                name="ios-heart-empty"
                                type="ionicon"
                                size={28}
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
                                size={35}
                                color="black"
                            />
                        }
                        onPress={() => this.props.navigation.navigate('comment')}

                    />
                </View>

            </View>
        );
    }
}
