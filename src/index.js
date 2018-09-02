import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { PostFeed } from "./components/containers";
import { Fonts } from "./components/utilities";
import Config from "./config";

class InstaClone extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.navBar}>
          <Image
            style={{ width: 40, height: 40 }}
            source={Config.images.cameraIcon}
          />
          <Text
            style={{
              fontFamily: Fonts.LemonJelly,
              fontSize: 35,
              color: "black",
              marginLeft: 5
            }}
          >
            Instagram
          </Text>
        </View>
        <ScrollView>
          <PostFeed />
        </ScrollView>
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
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10
  }
});

export default InstaClone;
