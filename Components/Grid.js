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
// var IMAGE_URLS =[];

class Grid extends React.Component {
    
    
    calculatedSize() {
        var size = windowWidth / IMAGES_PER_ROW
        return { width: size, height: size }
    }

    renderRow(images) {
        return images.map((image, i) => {
            return (
                <Image key={i} style={[styles.item, this.calculatedSize()]} source={{ uri: image.Image }} />
            );
        })
    }
    renderImagesInGroupsOf(IMAGE_URLS) {
        return _.chunk(IMAGE_URLS, IMAGES_PER_ROW).map((imagesForRow, i) => {
            return (
                <View style={styles.row} key={i}>
                    {IMAGE_URLS?this.renderRow(imagesForRow):""}
                </View>
            )
        })
    }

    render() {
        const params = this.props.navigation.getParam('posts')
        // const IMAGE_URLS = params && params.posts ? params.posts : [];
        const IMAGE_URLS = params;
        console.log(this.props.navigation)

        return (
            <ScrollView>
                {this.renderImagesInGroupsOf(IMAGE_URLS)}
            </ScrollView>
        );
    }
}

export default Grid;