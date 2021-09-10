import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import {HomeScreen} from '../screens/HomeScreen'
import {LoginScreen} from '../screens/LoginScreen'
import {VisitantesScreen} from '../screens/VisitantesScreen'
import {ProfileScreen} from '../screens/ProfileScreen'
import {LoadingScreen} from '../screens/LoadingScreen'

//Sub Nav
import {HomeNavigator} from './HomeNavigator'


const MainNavigator = createDrawerNavigator();



const SideMenuNav = () => {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name="Home" component={HomeScreen} />
      <MainNavigator.Screen name="Visitantes" component={VisitantesScreen} options={{ headerShown: false }} />
      <MainNavigator.Screen name="Profile" component={ProfileScreen} />
    </MainNavigator.Navigator>
  );
}

export const AppNavigator = () => (
  <NavigationContainer>
    <SideMenuNav/>
  </NavigationContainer>
);


