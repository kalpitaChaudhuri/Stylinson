import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tommo from './Tommo';
import Career from './Career';
import Tourdates from './Tourdates';
import Achievement from './Achievement';
import CustomDrawer from './CustomDrawer';
import { FontAwesome } from '@expo/vector-icons';

export default function Sidebar() {
   const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} screenOptions={{ headerShown: true }}>
        <Drawer.Screen 
        name="Tommo" 
        component={Tommo}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="crosshairs" size={20} color={color} />
          ),
        }}
         />
        <Drawer.Screen 
        name="Career" 
        component={Career}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="cubes" size={20} color={color} />
          ),
        }}
        />
        <Drawer.Screen 
        name="Tourdates" 
        component={Tourdates}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="calendar" size={20} color={color} />
          ),
        }}
        />
        <Drawer.Screen 
        name="Achievements" 
        component={Achievement}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="trophy" size={20} color={color} />
          ),
        }}
        />
    </Drawer.Navigator>
  );
}