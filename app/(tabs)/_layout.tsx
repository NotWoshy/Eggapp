import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router';
import '../../global.css';
import {useFonts} from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Micro5": require("../../assets/fonts/Micro5.ttf"),
  });

  const [isSplashScreenVisible, setSplashScreenvisible] = React.useState(true);


  useEffect(() => {
    if (error) throw error;
    
    if (fontsLoaded){
      setSplashScreenvisible(true);
      SplashScreen.hideAsync();
    } 
  }, [fontsLoaded,error]);

  if (!fontsLoaded && !error) return null;
  if (!isSplashScreenVisible || !fontsLoaded) return null;
  
  return(
  <Stack
    screenOptions={{
      headerShown: false,
      animation: 'none',  
      gestureEnabled: true,           
      animationDuration: 400,
      contentStyle: {backgroundColor: "#F1D895"},         
    }}
  >
    <Stack.Screen name="hard" options={{headerShown: false }} />
    <Stack.Screen name="overcooked" options={{headerShown: false }} />
    <Stack.Screen name="soft" options={{headerShown: false }} />
    <Stack.Screen name="runny" options={{headerShown: false}} />
  </Stack>
  )
}

export default RootLayout