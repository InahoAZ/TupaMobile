import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import * as IntentLauncher from 'expo-intent-launcher';

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

//Obtiene el archivo del Document Directory y lo abre con la aplicacion predeterminada para el tipo de archivo (Ver Android Intents -> ACTION_VIEW)
const viewFile = () => {    
    FileSystem.getContentUriAsync(fileUri)
        .then((promise)=>{
            IntentLauncher.startActivityAsync('android.intent.action.VIEW',{data:promise, flags: 1,
                });
            console.log(promise);
        })
    
}
  

export const VisitantesScreen = ({ navigation }) => {  

  return (
    <SafeAreaView style={{ flex: 1 }}>      
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