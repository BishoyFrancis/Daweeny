import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font'
import CustomDrawer from './components/CustomDrawer';

import react, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Details from './components/details'
import Items from './components/Items';
import Categery from './components/categery';
import Test from './components/test';
import AboutMe from './components/aboutMe';
import Terms from './components/trems';

import Donate from './screens/Donate';
import Sell from './screens/Sell';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';


import List from './screens/List';
import Search from './screens/Search';
import Profile from './screens/Profile';
import ModalTerms from './components/ModalTerms';

const myIcon = <Icon name="rocket" size={30} color="#900" />;


const customFonts={
    'QuicksandBold' : require('./assets/fonts/Quicksand-Bold.ttf'),
    'MochiyPopOne-Regular' : require('./assets/fonts/MochiyPopOne-Regular.ttf'),
    'Roboto-Regular' : require('./assets/fonts/Roboto-Regular.ttf'),
  }
  async function _loadFonts(){
    await Font.loadAsync(customFonts);
    console.log("Finished Loading fonts")
  }
  
  
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  useEffect(()=>{
    console.log("Loading");
    _loadFonts();

  },[])

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //   <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
    //     <Stack.Screen name='Drawer' component={SideMenu}/>
    //     <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/> 
    //     <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
    //     <Stack.Screen name="Main" component={Main}  options={{
    //       title: "",
    //       headerLeft:()=>(
    //         <Image  source={require('./assets/icon-white.png')}
    //           style={{
    //           width: 30,
    //           height: 30,
    //           resizeMode: 'contain'}}Submit
    //         />
    //       ),
    //       headerRight:()=>(
    //         <IconButton icon={props => <Icon name="navicon" {...props} size={30} color="white"/>} />
    //       ),
    //       headerStyle: {
    //         backgroundColor: '#1363DF',
    //       },
    //       headerTintColor: '#fff',
    //       headerTitleStyle: {
    //         fontWeight: 'bold',
    //       },
    //     }}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
       <NavigationContainer>
      <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}>
      {/* <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/> */}
      {/* <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/>  */}
      <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
      {/* <Stack.Screen name='Modal' options={{headerShown:false}} component={ModalTerms}/> */}
      <Stack.Screen name='Profile' options={{headerShown:false}} component={Profile}/>
      
      
      
      <Stack.Screen name="Main" component={Main}  options={{
        title: "",
        headerLeft:()=>(
          <Image  source={require('./assets/icon-white.png')}
            style={{
            width: 30,
            height: 30,
            resizeMode: 'contain'}}Submit
          />
        ),
        headerRight:()=>(
          <IconButton icon={props => <Icon name="navicon" {...props} size={30} color="white"/>} />
        ),
        headerStyle: {
          backgroundColor: '#1363DF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}/>
    <Stack.Screen name="List" component={List} options={{
        title: "",
        headerStyle: {
          backgroundColor: '#1363DF',
        }
      }}/>
    <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/> 
      <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/> 
      <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/> 
      <Stack.Screen name="Search" options={{title: "",
        headerTintColor:'#fff',
        headerStyle: {
          backgroundColor: '#1363DF',
          color: '#fff'
        }}} component={Search}/> 
      <Stack.Screen name="Donate" options={{title: "",
        headerTintColor:'#fff',
        headerStyle: {
          backgroundColor: '#1363DF',
          color: '#fff'
        }}} component={Donate}/> 
        <Stack.Screen name="Sell" options={{title: "",
        headerTintColor:'#fff',
        headerStyle: {
          backgroundColor: '#1363DF',
          color: '#fff'
        }}} component={Sell}/> 
      </Drawer.Navigator>
    </NavigationContainer>

  )
}