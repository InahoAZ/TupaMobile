import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Counter from './components/Counter';

import {RootNavigator} from './navigation/AppNavigator'

//UI
import { default as theme } from './custom-theme.json';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';





export default function App() {
  return (    
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <IconRegistry icons={EvaIconsPack} />
      <RootNavigator></RootNavigator>
    </ApplicationProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
