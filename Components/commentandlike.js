import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default class commentAndLike extends React.Component {
    render() {
        const { navigate, state } = this.props.navigation;
        return (
            <View style={{
                flex: .16,
                flexDirection: 'column'
            }}>
                <View style={{
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
                                    size={36}
                                    color="black"
                                />
                            }
                            onPress={() => this.props.navigation.navigate('comment', { go_back_key: state.key })}
                        />
                    </View>
                </View>
                <Text style={{ fontWeight: 'bold', marginLeft: "2%" }}>47 Likes</Text>
            </View>
        );
    }
}
