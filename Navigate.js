import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Sidebar from './Sidebar';
import Tourdates from './Tourdates';



export default function Navigate() {
const Stack = createNativeStackNavigator();
    return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home'
        component={Home} 
        options={{headerShown: false}} />
        <Stack.Screen name='Tommo'
        component={Sidebar}
        options={{headerShown: false}}/>
        <Stack.Screen
          name="tourdates"
          component={Tourdates}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
</NavigationContainer>
    )
}