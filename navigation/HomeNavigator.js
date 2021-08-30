import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import {HomeScreen} from '../screens/HomeScreeen'
import {LoginScreen} from '../screens/LoginScreen'


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator headerMode='none'>
      <Screen name='Home' component={HomeScreen}/>
      <Screen name='Login' component={LoginScreen}/>
    </Navigator>
  );
  
  export const AppNavigator = () => (
    <NavigationContainer>
      <HomeNavigator/>
    </NavigationContainer>
  );
  
