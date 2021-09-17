import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';


export const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Login</Text>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    }
});