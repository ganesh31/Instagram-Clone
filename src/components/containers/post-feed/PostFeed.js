import React, { Component } from "react";
import { View } from "react-native";
import { Post } from "../../presentation";

class PostFeed extends Component {
  render() {
    return (
      <View>
        <Post />
      </View>
    );
  }
}

export default PostFeed;
