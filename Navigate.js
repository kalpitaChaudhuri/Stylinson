import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Sidebar from './Tomlinson/Sidebar';
import Tourdates from './Tomlinson/Tourdates';
import Career from './Tomlinson/Career';
import Achievement from './Tomlinson/Achievement';



export default function Navigate() {
const Stack = createNativeStackNavigator();
    return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Home'
        component={Home}
        options={{headerShown: false}} />
        <Stack.Screen name='Sidebar'
        component={Sidebar}
        options={{headerShown: false}}/>
        <Stack.Screen name='Career'
        component={Career}
        options={{headerShown: false}}/>
        <Stack.Screen name='Tourdates'
        component={Tourdates}
        options={{headerShown: false}}/>
        <Stack.Screen name='Achievements'
        component={Achievement}
        options={{headerShown: false}}/>
    </Stack.Navigator>
</NavigationContainer>
    )
}