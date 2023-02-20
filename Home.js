import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground, Button, Alert } from 'react-native';

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>Welcome to the world of Larry Stylinson</Text>
      <TextInput
       style={styles.larry}
       placeholder="Share Thoughts"
       defaultValue={text}
       onSubmitEditing={(newText) => setText(newText.nativeEvent.text)}
       />
       <Text style={styles.text1}>{text}</Text>
      <ImageBackground
       style={styles.coverimage}
       source={{
        uri : 'https://w0.peakpx.com/wallpaper/99/523/HD-wallpaper-larry-stylinson-harry-styles-larry-stylinson-louis-tomlinson-one-direction-thumbnail.jpg'
       }}>
        <View style={styles.textview}>
          <Text style={styles.imagetext}>Baby, you're the love of my life</Text>
        </View>
       </ImageBackground>
      <View style={styles.button1}>
      <Button color='#1D98BC' title='Tommo'
      onPress={() => navigation.navigate("Sidebar")}
      />
      </View>
      <View style={styles.button2}>
      <Button color='#1DBC44' title='Hazza' onPress={() => 
      Alert.alert(
        "You chose to Treat people with Kindness",
        "",
        [
        {text : 'Little Freak!'},
        ]
      )} /></View>
      <StatusBar backgroundColor='#F9E79F'/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  larry: {
    top: 100,
    position: "absolute"
  },

  text1: {
    bottom: 10,
  },

  coverimage: {
    width : 400,
    height : 550,
  },

  textview :{
    position : 'absolute',
    justifyContent : 'center',
    alignItems : 'center',
    top : 0,
    left : 0,
    right : 0,
    bottom : 0,
  },

  imagetext : {
    fontSize : 20,
    color : '#CB4335',
    fontWeight : '800',
  },

  text :{
    fontSize : 20,
    fontWeight : 'bold',
    position : 'absolute',
    top : '7%',
    color : 'cadetblue',
  },

  button1 :{
    position : 'absolute',
    left : 35,
    bottom : 54,
    
  },
  
  button2 :{
    position : 'absolute',
    right : 35,
    bottom : 54,
  }
});

