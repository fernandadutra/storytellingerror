import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
var stories = require("../screens/temp.json");

SplashScreen.preventAutoHideAsync();
var font = {
  "bubblegum-sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Storycard extends Component {
  constructor() {
    super();
    this.state = {
      fontloaded: false,
    };
  }
  async loadfontsasync() {
    await Font.loadAsync(font);
    this.setState({
      fontloaded: true,
    });
  }
  componentDidMount() {
    this.loadfontsasync();
  }
  render() {
    if (!this.state.fontloaded) {
      SplashScreen.hideAsync();
      return (
        <TouchableOpacity style={styles.container} onPress={()=>{this.props.navigation.navigate("Tela de História", {story:this.props.story})}}>
          <View style={styles.cardContainer}>
            <Image source={require("../assets/story_image_1.png")} style={styles.storyImage}></Image>
            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
              <Text style={styles.storyAuthorText}>{this.props.story.author}</Text>
              <Text style={styles.descriptionText}>{this.props.story.description}</Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons
                  name={"heart"}
                  size={RFValue(30)}
                  color={"white"}
                ></Ionicons>
                <Text style={styles.likeText}>12K</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
  },

  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250),
  },

  titleContainer: { paddingLeft: RFValue(20), justifyContent: "center" },

  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white",
  },

  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white",
  },

  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10),
  },

  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },

  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
  },

  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
