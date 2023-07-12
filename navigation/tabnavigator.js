import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feed from "../screens/feed";
import Createstory from "../screens/createstory";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          var iconname;
          if (route.name == "Feed") {
            iconname = focused ? "book" : "book-outline";
          } else if (route.name == "Createstory") {
            iconname = focused ? "create" : "create-outline";
          }
          return (
            <Ionicons name={iconname} size={RFValue(25)} color={color} style={styles.icons}></Ionicons>
          );
        },
      })}
      activeColor={"tomato"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Feed" component={Feed}></Tab.Screen>
      <Tab.Screen name="Createstory" component={Createstory}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute",
  },

  icons: { width: RFValue(30), height: RFValue(30) }
});

export default BottomTabNavigator;
