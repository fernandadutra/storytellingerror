import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Storycard from "../screens/storycard";
import { RFValue } from "react-native-responsive-fontsize";
var stories = require("../screens/temp.json");

SplashScreen.preventAutoHideAsync();
var font = {
  "bubblegum-sans": require("../assets/fonts/BubblegumSans-Regular.ttf"),
};

export default class Feed extends Component {
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
  renderitem=({item:story})=>{
  return <Storycard story={story} navigation={this.props.navigation}></Storycard>
  }
  render() {
    if (!this.state.fontloaded) {
      SplashScreen.hideAsync();
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
          <View style={styles.cardContainer}>
            <FlatList
              data={stories}
              keyExtractor={(item, index) => index.toString()}
              renderItem={this.renderitem}
            />
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

  cardContainer: { flex: 0.85 },
});
