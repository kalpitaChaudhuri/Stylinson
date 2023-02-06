import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tommo from './Tommo';
import Tourdates from './Tourdates';

export default function Sidebar() {
   const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="Tommo" component={Tommo} />
        <Drawer.Screen name="Tourdates" component={Tourdates} />
    </Drawer.Navigator>
  );
}