import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props} 
    contentContainerStyle={{backgroundColor:'#CCCCFF'}}>
     <ImageBackground 
     source= {{uri : "https://pbs.twimg.com/media/FqbFwYoXoAUb9eV.jpg",}}
     style={{ padding:20 }}>
      <Image
      source= {{uri: "https://w0.peakpx.com/wallpaper/581/788/HD-wallpaper-louis-tomlinson-blue-blue-indie-louis-tomlinson-tomlinson.jpg",}}
      style={{
        height: 80, 
        width: 80, 
        borderRadius: 50, 
        marginBottom: 5,
      }}
      />
      <Text style={{ 
        fontSize: 20, 
        fontWeight: "500",
        color: 'white'}}>
        Louis Tomlinson
      </Text>
     </ImageBackground>
      <DrawerItemList {...props} /> 
    </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer;