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

class InstaClone extends Component {
  constructor() {
    super();
    this.state = {
      deviceWidth: Math.floor(Dimensions.get("window").width),
      liked: false
    };
  }

  handleLikeToggled = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const imageUri =
      "https://lh3.googleusercontent.com/PHISljl9oGsbPgshHTrr69nFnjFhXrtWnc4ING0YemuBUF28yZbytxbyUywdx92rZNMMU3BS5g_OP85YOlpmfhnWVw" +
      "=s" +
      Math.floor(this.state.deviceWidth * 1.1) +
      "-c";

    const heartColor = this.state.liked ? "rgb(252, 61, 57)" : null;

    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}>
          <Text style={{ fontWeight: "bold" }}>Instagram</Text>
        </View>
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
        <TouchableOpacity activeOpacity={0.6} onPress={this.handleLikeToggled}>
          <Image
            style={{
              width: this.state.deviceWidth,
              height: Math.floor(this.state.deviceWidth * 1.1)
            }}
            source={{
              uri: imageUri
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image
            style={[styles.icon, { tintColor: heartColor }]}
            source={config.images.heartIcon}
          />
          <Image
            style={[styles.icon, { height: 24, width: 24 }]}
            source={config.images.bubbleIcon}
          />
          <Image style={styles.icon} source={config.images.arrowIcon} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 50,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(230,230,230)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(230,230,230)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row"
  },

  icon: {
    marginHorizontal: 2
  }
});

export default InstaClone;
