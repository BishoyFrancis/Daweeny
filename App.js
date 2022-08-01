import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import {IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import Form from './screens/Form';
import * as Font from 'expo-font'

import Splash from './screens/Splash';
import Login from './screens/Login';
import Register from './screens/Register';

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
  useEffect(()=>{
    console.log("Loading");
    _loadFonts();

  },[])
  
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" options={{headerShown:false}} component={Splash}/>
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login}/> 
        <Stack.Screen name="Register" options={{headerShown:false}} component={Register}/>
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
        <Stack.Screen name="Submit" component={Submit} />
}