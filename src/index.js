import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import config from "./config";
import { PostFeed } from "./components/containers";

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.navBar}>
          <Text style={{ fontWeight: "bold" }}>Instagram</Text>
        </View>
        <PostFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(230,230,230)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default InstaClone;
