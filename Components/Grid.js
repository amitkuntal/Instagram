import React from 'react';
import { StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
import _ from 'lodash';

const styles = StyleSheet.create({
    item: {
        margin: 1.5,
    },
    row: {
        flexDirection: "row",
    },
});

const windowWidth = Dimensions.get('window').width;
var IMAGES_PER_ROW = 3;
var IMAGE_URLS = [
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
    'https://picsum.photos/536/354',
]

class Grid extends React.Component {

    calculatedSize() {
        var size = windowWidth / IMAGES_PER_ROW
        return { width: size, height: size }
    }

    renderRow(images) {
        return images.map((uri, i) => {
            return (
                <Image key={i} style={[styles.item, this.calculatedSize()]} source={{ uri: uri }} />
            );
        })
    }
    renderImagesInGroupsOf() {
        return _.chunk(IMAGE_URLS, IMAGES_PER_ROW).map((imagesForRow, i) => {
            return (
                <View style={styles.row} key={i}>
                    {this.renderRow(imagesForRow)}
                </View>
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <ScrollView>
                {this.renderImagesInGroupsOf()}
            </ScrollView>
        );
    }
}

export default Grid;