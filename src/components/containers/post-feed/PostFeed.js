import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Post } from "../../presentation";

class PostFeed extends Component {
  _renderPost = ({ item }) => <Post item={item} />;

  render() {
    return (
      <View>
        <FlatList
          data={[
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20
          ]}
          keyExtractor={item => item.toString()}
          renderItem={this._renderPost}
        />
      </View>
    );
  }
}

export default PostFeed;
