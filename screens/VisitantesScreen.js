import React from 'react';
import { Image, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import { Button, Divider, Layout, TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as IntentLauncher from 'expo-intent-launcher';
import { DrawerActions } from '@react-navigation/native';

const uri = 'https://i.imgur.com/rLHDZ4o.jpeg';
let fileUri = FileSystem.documentDirectory + 'imagen.jpg';


//Descarga de una url un archivo, y lo guarda en el Document Directory (ver docs Expo FileSystem)
const saveFile = () => {
    FileSystem.downloadAsync(
        uri,
        fileUri
      )
        .then(({ uri }) => {
          console.log('Finished downloading to ', uri);
        })
        .catch(error => {
          console.error(error);
        });
}

//Obtiene el archivo del Document Directory y lo abre con la aplicacion predeterminada para el 
//tipo de archivo (Ver Android Intents -> ACTION_VIEW)
// TODO: ver como hacer lo mismo con IOS o otra forma haciendo que lo maneje Expo eso.
const viewFile = () => {    
    FileSystem.getContentUriAsync(fileUri)
        .then((promise)=>{
            IntentLauncher.startActivityAsync('android.intent.action.VIEW',{data:promise, flags: 1,
                });
            console.log(promise);
        })
    
}
  
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back'/>
);


export const VisitantesScreen = ({ navigation }) => {  
  
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={()=> {navigation.goBack()}}/>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        accessoryLeft={BackAction}
        title='Visitantes'
      />      
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={saveFile}>Guardar QR</Button>
        <Button onPress={viewFile}>Ver QR</Button>
        <Image
            source={{
            uri:fileUri
            }}
      />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  },
});