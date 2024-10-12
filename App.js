import React, { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Homescreen';


// Create a stack navigator
const Stack = createStackNavigator();

function SplashScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();

    // Navigate to Home screen after 5 seconds
    const timeout = setTimeout(() => {
      navigation.replace('Home');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [fadeAnim, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.backgroundImage, opacity: fadeAnim }}>
        <ImageBackground
          source={require('./assets/Samaya.jpg')} // Path to your background image
          style={styles.backgroundImage}
        />
      </Animated.View>
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'FFFFFF',
  },
  backgroundImage: {
    flex:1,
    width: '100%',
    height:'100%',
    resizeMode: 'cover',
    justifyContent:'center',
    alignItems: 'center', 
    position:'relative',
    
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
