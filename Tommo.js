import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Tommo({ navigation }) {
  return (
    <View>
    <Image
    style={styles.Timage}
       source={{
        uri : 'https://www.j-14.com/wp-content/uploads/2022/12/Louis12.jpg?fit=800%2C533&quality=86&strip=all'
       }}>
    </Image>
    <Text style={styles.Tname}>
      Louis William Tomlinson
    </Text>
    <Text style={styles.Tbio}>
     Born: {" "}Louis Troy Austin {"\n\n"}
     Nationality: {" "}British (Doncaster, UK) {"\n\n"}  
     DOB: {" "}Dec 24, 1991 (31 years) {"\n\n"}
     Parents: {" "}Johannah Deakin, Mark Tomlinson{"\n\n"}
     Siblings: {" "}Lottie, Felicite, Phoebe, Daisy Tomlinson & Georgia Austin{"\n\n"}
     Children: {" "}Freddie Reign Tomlinson {"\n\n"}
     Significant Others: {" "}Harry Edward Styles (since 2010) {"\n\n"}
     Albums:{" "}Walls (2019), Faith In The Future (2022) {"\n\n"}
    </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Timage: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    left: 60,
    width : 300,
    height : 250,
  },

  Tname: {
    position: 'absolute',
    top: 330,
    right: 110,
    fontSize : 20,
    color : '#2c75ff',
    fontWeight : '800',
  },

  Tbio: {
    position: 'absolute',
    top: 400,
    left: 30,
    fontSize : 16,
    color : 'black',
    fontWeight : '500',
  }
});
