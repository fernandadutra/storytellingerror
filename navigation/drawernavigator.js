import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import Stacknavigator from "./stacknavigator";
import Profile from "../screens/profile";

const Drawer=createDrawerNavigator();
const Drawernavigator=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Stacknavigator}></Drawer.Screen>
            <Drawer.Screen name="Perfil" component={Profile}></Drawer.Screen>
        </Drawer.Navigator>
    )
}
export default Drawernavigator;