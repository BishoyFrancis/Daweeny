import { Stack } from '@react-native-material/core';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font'


import Splash from './screens/Splash';
import Login from './screens/Login';


export default function App() {
  const Stack = createNativeStackNavigator();

  const customFonts={
    'QuicksandBold' : require('./assets/fonts/Quicksand-Bold.ttf'),
    'MochiyPopOne-Regular' : require('./assets/fonts/MochiyPopOne-Regular.ttf'),
    'Roboto-Regular' : require('./assets/fonts/Roboto-Regular.ttf'),
  }
  async function _loadFonts(){
    await Font.loadAsync(customFonts);
    console.log("Finished Loading fonts")
  }
  useEffect(()=>{
    console.log("Loading");
    _loadFonts();

  },[])
  return (
   
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  
    
  );
}

const styles = StyleSheet.create({
 
});
