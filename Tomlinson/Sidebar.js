import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tommo from './Tommo';
import Career from './Career';
import Tourdates from './Tourdates';
import Achievement from './Achievement';
import CustomDrawer from './CustomDrawer';

export default function Sidebar() {
   const Drawer = createDrawerNavigator();
    return (
    <Drawer.Navigator drawerContent={this.props.first => <CustomDrawer {...this.props.first} />} screenOptions={{ headerShown: true }}>
        <Drawer.Screen name="Tommo" component={Tommo} />
        <Drawer.Screen name="Career" component={Career} />
        <Drawer.Screen name="Tourdates" component={Tourdates} />
        <Drawer.Screen name="Achievements" component={Achievement} />
    </Drawer.Navigator>
  );
}