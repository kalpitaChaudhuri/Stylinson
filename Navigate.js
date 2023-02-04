import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Tommo from './Tommo';



export default function Navigate() {
const Stack = createNativeStackNavigator();
    return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home'
        component={Home} 
        options={{headerShown: false}} />
        <Stack.Screen name='Tommo'
        component={Tommo} />
    </Stack.Navigator>
</NavigationContainer>
    )
}