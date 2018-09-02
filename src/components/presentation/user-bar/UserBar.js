import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import config from "../../../config";
import { Fonts } from "../../utilities";

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
          <Text
            style={{
              marginLeft: 10,
              fontFamily: Fonts.RobotoRegular,
              fontWeight: "bold",
              color: "black"
            }}
          >
            just_another_guy
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
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
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
