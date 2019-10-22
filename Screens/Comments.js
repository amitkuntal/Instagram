import React from 'react';
import { Text, View, FlatList, BackHandler, KeyboardAvoidingView } from 'react-native';
import { Header, Icon, Avatar, Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

class OtherScreen extends React.Component {
    render() {
        const { state } = this.props.navigation;
        const params = state.params || {};
        BackHandler.addEventListener('hardwareBackPress', () => this.props.navigation.navigate(params.go_back_key));
        return (

            <View>
                <Header backgroundColor="white">
                    <Button
                        icon={
                            <Icon
                                name="arrowleft"
                                type="antdesign"
                                size={20}
                                color="black"
                            />
                        }
                        type="clear"
                        onPress={() => this.props.navigation.navigate(params.go_back_key)}
                    />
                    <Text style={{ fontSize: 21, }}>Comments</Text>
                </Header>
                <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} >
                    <ScrollView style={{ width: "100%", height: '82.5%', }}>
                        <FlatList data={[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
                            renderItem={({ Item }) =>
                                <View style={{ marginTop: "2%", flexDirection: "row", paddingLeft: "2%" }}>
                                    <Avatar
                                        rounded
                                        size="small"
                                        source={{
                                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                                        }}
                                    />
                                    <View>
                                        <Text style={{ marginTop: "2%", marginLeft: "2%", fontSize: 16, fontWeight: 'bold' }}>User Name</Text>
                                        <Text style={{ marginLeft: "2%", marginRight: "10%", fontSize: 14 }}>CommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsComments</Text>
                                    </View>

                                </View>}>
                        </FlatList>
                    </ScrollView>

                    <View style={{ flexDirection: "row", height: '10.5%' }}>
                        <View style={{ width: "80%", height: '100%' }}>
                            <Input
                                inputStyle={{ marginTop: '3%' }}
                                placeholder="Add a comment" /></View>
                        <View style={{ width: "20%", height: '100%' }}>
                            <Button title="Post"
                                type="clear"
                                onPress={() => this.props.navigation.navigate('Home')}
                                buttonStyle={{ marginTop: '5%' }}
                            />
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </View>

        );
    }
}

export default OtherScreen;