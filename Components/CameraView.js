import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements';
import AddPostHeader from './AddPostHeader';
import { withNavigationFocus } from 'react-navigation'
class CameraView extends React.Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        luminous: Camera.Constants.FlashMode.off,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.props.navigation.navigate('preview', { photo: photo.uri });
        }
    };

    render() {

        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <AddPostHeader title="Camera" navigationProps={this.props.navigation} />
                    {this.props.isFocused && <Camera style={{ flex: 1 }} type={this.state.type} flashMode={this.state.luminous}
                        ref={ref => { this.camera = ref; }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                            }}>
                        </View>
                        <View style={{ flex: 0.1, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-around', marginBottom: '3%' }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type:
                                            this.state.type === Camera.Constants.Type.back
                                                ? Camera.Constants.Type.front
                                                : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Icon name='md-reverse-camera' type='ionicon' size={25} color='#808080' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => this.snap()}>
                                <Icon name='circle-slice-8' type='material-community' size={60} color='#C0C0C0' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        luminous:
                                            this.state.luminous === Camera.Constants.FlashMode.on
                                                ? Camera.Constants.FlashMode.off
                                                : Camera.Constants.FlashMode.on,
                                    });
                                }}>
                                <Icon name={
                                    this.state.luminous === Camera.Constants.FlashMode.on ?
                                        'flash' : 'flash-off'
                                } type='material-community' size={25} color='#808080' />
                            </TouchableOpacity>
                        </View>
                    </Camera>}
                </View>
            );
        }
    }
}

export default withNavigationFocus(CameraView);