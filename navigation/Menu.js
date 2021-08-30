import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import {HomeScreen} from '../screens/HomeScreeen'
import {LoginScreen} from '../screens/LoginScreen'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const SideMenu = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    );
  }

  export const AppNavigator = () => (
    <NavigationContainer>
      <SideMenuNav/>
    </NavigationContainer>
  );