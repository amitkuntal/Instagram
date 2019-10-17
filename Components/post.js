import React from 'react';
import {  View } from 'react-native';

import PostHeader from './postheader';
import PostImage from './image';
import CommentAndLike from './commentandlike';
import CounterCaption from './counterandcaption';

export default class post extends React.Component {
    render() {
      return (
        <View style={{width:"100%",marginBottom:"5%"}}>
            <PostHeader />
            <PostImage />
            <CommentAndLike />
            <CounterCaption/>
        </View>
      );
    }
  }