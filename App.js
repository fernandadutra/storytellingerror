import React from "react";
import Drawernavigator from "./navigation/drawernavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Drawernavigator></Drawernavigator>
    </NavigationContainer>
  );
}

