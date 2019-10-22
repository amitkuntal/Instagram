import * as React from 'react';
import { Image, View, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import AddPostHeader from '../Components/AddPostHeader';

export default class ImagePickerExample extends React.Component {

    render() {

        return (
            <View style={{ flex: 1 }}>
                <AddPostHeader title="Gallery" navigationProps={this.props.navigation} />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button
                        title="Pick an image"
                        type='outline'
                        onPress={this._pickImage}
                    />
                </View>
            </View>
        );
    }

    async componentDidMount() {
        await this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
        });


        if (!result.cancelled) {
            this.props.navigation.navigate('preview', { photo: result.uri });
        }
    };
}