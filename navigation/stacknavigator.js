import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "../navigation/tabnavigator";
import StoryScreen from "../screens/storyscreen";

const Stack=createStackNavigator();
const Stacknavigator=()=>{
    return(
        <Stack.Navigator initialRouteName="Tela Inicial" screenOptions={{headerShown:false}}>
            <Stack.Screen name={"Tela Inicial"} component={TabNavigator}></Stack.Screen>
            <Stack.Screen name={"Tela de História"} component={StoryScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Stacknavigator;