import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import {HomeScreen} from '../screens/HomeScreen'
import {LoginScreen} from '../screens/LoginScreen'
import {VisitantesScreen} from '../screens/VisitantesScreen'


const Drawer = createDrawerNavigator();

const SideMenuNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Visitantes" component={VisitantesScreen} />
    </Drawer.Navigator>
  );
}

export const AppNavigator = () => (
  <NavigationContainer>
    <SideMenuNav/>
  </NavigationContainer>
);