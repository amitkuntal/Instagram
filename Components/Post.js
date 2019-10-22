import React from 'react';
import { View } from 'react-native';

import PostHeader from './postheader';
import PostImage from './image';
import CommentAndLike from './commentandlike';
import CounterCaption from './counterandcaption';

export default class Post extends React.Component {
  render() {
    return (
      <View style={{ width: "100%", marginBottom: "1%", marginTop: "1%" }}>
        <PostHeader userData={this.props.postData.item.User} />
        <PostImage src={this.props.postData.item.Image} />
        <CommentAndLike navigation={this.props.navigation} postID={this.props.postData.item.Post_id} userID={this.props.postData.item.User_id} />
        <CounterCaption cText={this.props.postData.item.Caption} />
      </View>
    );
  }
}