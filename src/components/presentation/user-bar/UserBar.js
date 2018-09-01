import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import config from "../../../config";

class UserBar extends Component {
  render() {
    return (
      <View style={styles.userBar}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Image
            style={styles.userPic}
            source={{
              uri:
                "https://lh3.googleusercontent.com/n3mN9EpS_85XVjq_c_atOfqBY1Y4yxMWci7riSQdcgaD7NAS5Qxr7RNB5WgB23ehC5vsPM3fRdbGDkuvn4cTlaKK"
            }}
          />
          <Text style={{ marginLeft: 10, fontWeight: "bold" }}>
            Just anothe Guy
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30 }}>...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  }
});

export default UserBar;
