import React from 'react';
import { View } from 'react-native';

import PostHeader from './postheader';
import PostImage from './image';
import CommentAndLike from './commentandlike';
import CounterCaption from './counterandcaption';

export default class Post extends React.Component {
  render() {
    return (
      <View style={{ width: "100%", marginBottom: "2%" }}>
        <PostHeader />
        <PostImage />
        <CommentAndLike navigation={this.props.navigation} />
        <CounterCaption />
      </View>
    );
  }
}