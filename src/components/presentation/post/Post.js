import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { UserBar } from "../";
import { AutoScaledImage, Fonts } from "../../utilities";
import config from "../../../config";

class Post extends Component {
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
      this.props.item % 2 === 0
        ? "https://lh3.googleusercontent.com/eLxETOl6vgIj6TaZUBrzCAJ77V3I6ssOlS3g_tmxozOcvl3jVDQEIuQ2yANgak0Ud6GnoIbwOINARqqGzaGmQWCx0g"
        : "https://lh3.googleusercontent.com/aQNSSQ3YZaLeo18igJ4LjfIbPNZuVNivoZDL9dQJ9k44LsE6PWQejYD6AYRFKmNtJCsMoHrdptg15VTEPPWxPILZSA";

    const heartColor = this.state.liked ? "rgb(252, 61, 57)" : null;

    return (
      <View>
        <UserBar />
        <TouchableOpacity activeOpacity={0.6} onPress={this.handleLikeToggled}>
          <AutoScaledImage uri={imageUri} width={this.state.deviceWidth} />
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
        <View style={[styles.iconBar, { height: 30 }]}>
          <Text
            style={{
              fontFamily: Fonts.RobotoRegular,
              fontWeight: "bold",
              color: "black"
            }}
          >
            56 likes
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconBar: {
    height: 35,
    width: 100 + "%",
    borderColor: "rgb(230,230,230)",
    flexDirection: "row",
    alignItems: "center"
  },

  icon: {
    marginHorizontal: 2
  }
});

export default Post;
