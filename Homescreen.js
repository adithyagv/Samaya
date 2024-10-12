import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.imgContainer}>
      <Image
        source={require('./assets/home 1.jpg')} // Correct way to use source prop
        style={styles.image}  // Apply styles to the image
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',   // Set width for the image
    height: 451,  // Set height for the image
    position:'relative',
    bottom:155,
    left:0.5,
  },
  home:{
    justifyContent:'center',
    position:'relative',
    bottom:550,
    color:'white',
    fontSize:30,
  }
});
