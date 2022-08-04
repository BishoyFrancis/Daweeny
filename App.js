import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font'
import CustomDrawer from './components/CustomDrawer';

import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';
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
      </Drawer.Navigator>
    </NavigationContainer>

   
  )
}