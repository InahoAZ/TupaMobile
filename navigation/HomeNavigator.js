import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {VisitantesScreen} from '../screens/VisitantesScreen'



const Stack = createStackNavigator();


export const HomeNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Visitantes" component={VisitantesScreen}/>
        </Stack.Navigator>
    )
} 