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


const MainNavigator = createStackNavigator();
const AppNavigator = createDrawerNavigator();


//Se usa este stack si no esta logeado
const AuthNav = () => {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name="Login" component={LoginScreen}/>
    </MainNavigator.Navigator>
  ) 
}

//Menu lateral
const SideMenuNav = () => {
  const isSignedIn = true;
  return (
      
      <AppNavigator.Navigator>
          <AppNavigator.Screen name="Home" component={HomeScreen} />
          <AppNavigator.Screen name="Visitantes" component={VisitantesScreen} options={{ headerShown: false }} />
          <AppNavigator.Screen name="Profile" component={ProfileScreen} />
          
      </AppNavigator.Navigator>
      
  );
}

//Pseudo login
const authData = true;

export const RootNavigator = () => (
  
  <NavigationContainer>
    {authData ? <SideMenuNav/> : <AuthNav />}    
  </NavigationContainer>
);


