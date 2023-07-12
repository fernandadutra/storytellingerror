import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Storycard from "../screens/storycard";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
var stories = require("../screens/temp.json");

SplashScreen.preventAutoHideAsync();
var font = {
  "bubblegum-sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Createstory extends Component {
  constructor() {
    super();
    this.state = {
      fontloaded: false,
      previewimage: "image_1",
      dropdownheight: 40,
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
      var preview_images = {
        image_1: require("../assets/story_image_1.png"),
        image_2: require("../assets/story_image_2.png"),
        image_3: require("../assets/story_image_3.png"),
        image_4: require("../assets/story_image_4.png"),
        image_5: require("../assets/story_image_5.png"),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: "contain",
                  marginLeft: 10,
                }}
                source={require("../assets/logo.png")}
              />
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>App narração de histórias</Text>
            </View>
          </View>
          <View>
            <Image source={preview_images[this.state.previewimage]}></Image>
            <View style={{ height: RFValue(this.state.dropdownheight) }}>
              <DropDownPicker
                items={[
                  { label: "image1", value: "image_1" },
                  { label: "image2", value: "image_2" },
                  { label: "image3", value: "image_3" },
                  { label: "image4", value: "image_4" },
                  { label: "image5", value: "image_5" },
                ]}
                defaultValue={this.state.previewimage}
                containerStyle={{
                  height: 40,
                  borderRadius: 20,
                  marginBottom: 10,
                }}
                onOpen={() => this.setState({ dropdownheight: 170 })}
                onClose={() => this.setState({ dropdownheight: 40 })}
                dropDrowStyle={{ backgroundColor: "#2F345D" }}
                itemStyle={{ justifyContent: "flex-start" }}
                style={{ backgroundColor: "transparent" }}
                arrowStyle={{ color: "white", fontFamily: "bubblegum-sans" }}
                labelStyle={{ color: "white", fontFamily: "bubblegum-sans" }}
                onChangeItem={(item) =>
                  this.setState({ previewimage: item.value })
                }
              />
            </View>
            <View style={{ flex: 0.08 }}>
              <TextInput
                placeholder={"Title"}
                placeholderTextColor={"white"}
                onChangeText={(title) => this.setState({ title })}
                style={styles.inputFont}
              ></TextInput>
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(description) => this.setState({ description })}
                placeholder={"Description"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(story) => this.setState({ story })}
                placeholder={"Story"}
                multiline={true}
                numberOfLines={20}
                placeholderTextColor="white"
              />
              <TextInput
                style={[
                  styles.inputFont,
                  styles.inputFontExtra,
                  styles.inputTextBig,
                ]}
                onChangeText={(moral) => this.setState({ moral })}
                placeholder={"Moral of the story"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="white"
              />
            </View>
          </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },

  appTitle: { flex: 0.07, flexDirection: "row" },

  appIcon: { flex: 0.3, justifyContent: "center", alignItems: "center" },

  iconImage: { width: "100%", height: "100%", resizeMode: "contain" },

  appTitleTextContainer: { flex: 0.7, justifyContent: "center" },

  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "bubblegum-sans",
  },

  fieldsContainer: { flex: 0.85 },

  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain",
  },

  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans",
  },

  inputFontExtra: { marginTop: RFValue(15) },

  inputTextBig: { textAlignVertical: "top", padding: RFValue(5) },
});
