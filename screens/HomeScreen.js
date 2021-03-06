import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const HomeScreen = ({ navigation }) => {

  const navigateLogin = () => {
    navigation.navigate('Visitantes');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}> 
        
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateLogin}>Visitantes</Button>
      </Layout>
    </SafeAreaView>
  );
};