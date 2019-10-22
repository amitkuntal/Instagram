import React from 'react';
import { View, Image, KeyboardAvoidingView, } from 'react-native';
import { Header, Icon, Button, Input } from 'react-native-elements';

export default class Preview extends React.Component {

    render() {
        return (
            <View>
                <Header backgroundColor="white"
                    leftComponent={
                        <Icon name="arrowleft" type="antdesign" size={20} onPress={() => (this.props.navigation.navigate('Camera'))} />
                    }
                    rightComponent={
                        <Button title='Post' type='clear' onPress={() => (this.props.navigation.navigate('Profile'))} />
                    } />
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={25} >
                    <Image style={{ height: '70%', width: '100%' }} source={{ uri: `${this.props.navigation.state.params.photo}` }} />
                    <View style={{ height: '25%', width: '100%', alignItems: 'center' }}>
                        <Input placeholder='Add Caption' label='Caption'
                            labelStyle={{ marginTop: 50, fontWeight: 'bold', fontSize: 18, color: 'black' }} />
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}