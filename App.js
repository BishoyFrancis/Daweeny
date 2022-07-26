import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./screens/Main";
import { IconButton } from "@react-native-material/core";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Font from "expo-font";
import CustomDrawer from "./components/CustomDrawer";
import Ionicons from 'react-native-vector-icons/Ionicons' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

import Donate from "./screens/Donate";
import Sell from "./screens/Sell";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Register from "./screens/Register";
import List from "./screens/List";
import Search from "./screens/Search";
import Details from "./screens/Details";
import Toast from "react-native-toast-message";

// import Auth from "./context/store/Auth";

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const customFonts = {
  QuicksandBold: require("./assets/fonts/Quicksand-Bold.ttf"),
  "MochiyPopOne-Regular": require("./assets/fonts/MochiyPopOne-Regular.ttf"),
  "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
};
async function _loadFonts() {
  await Font.loadAsync(customFonts);
  console.log("Finished Loading fonts");
}

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    console.log("Loading");
    _loadFonts();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Splash" options={{headerShown:false , drawerIcon:({color})=>{
            return(<Feather name='loader' size={25} color={color}/>)
          } , drawerLabelStyle:{marginLeft:-20 , fontSize:18}, drawerActiveBackgroundColor:'#1363DF' , drawerActiveTintColor:'white'}} component={Splash}/>
        <Drawer.Screen name="Login" options={{headerShown:false , drawerIcon:({color})=>{
            return(<MaterialIcons name='login' size={25} color={color}/>)
          }, drawerLabelStyle:{marginLeft:-20 , fontSize:18}, drawerActiveBackgroundColor:'#1363DF' , drawerActiveTintColor:'white'}} component={Login}/> 
        <Drawer.Screen
          name="Register"
          options={{ headerShown: false , drawerIcon:({color})=>{
            return(<Ionicons name='create-outline' size={25} color={color}/>)
          } , drawerLabelStyle:{marginLeft:-20 , fontSize:18}, drawerActiveBackgroundColor:'#1363DF' , drawerActiveTintColor:'white'}}
          component={Register}
        />
        {/* <Stack.Screen name='Modal' options={{headerShown:false}} component={ModalTerms}/> */}
        <Drawer.Screen
          name="Profile"
          options={{ headerShown: false , drawerIcon:({color})=>{
            return(<Ionicons name='person-outline' size={25} color={color}/>)
          }, drawerLabelStyle:{marginLeft:-20 , fontSize:18} , drawerActiveBackgroundColor:'#1363DF' , drawerActiveTintColor:'white'}}
          component={Profile}
          
        />

        {/* <Stack.Screen name="Main" component={Main}  options={{
        title: "",
        headerLeft:()=>(
          <Image  source={require('./assets/icon-white.png')}
            style={{
            width: 30,
            height: 30,
            resizeMode: 'contain'}}Submit

      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Register"
            options={{ headerShown: false }}
            component={Register}
          /> */}
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "",
              headerLeft: () => (
                <Image
                  source={require("./assets/icon-white.png")}
                  style={{
                    width: 30,
                    height: 30,
                    resizeMode: "contain",
                  }}
                  Submit
                />
              ),
              headerRight: () => (
                <IconButton
                  icon={(props) => (
                    <Icon name="navicon" {...props} size={30} color="white" />
                  )}
                />
              ),
              headerStyle: {
                backgroundColor: "#1363DF",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="List"
            component={List}
            options={{
              title: "",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#1363DF",
                color: "#fff",
              },
            }}
          />

          <Stack.Screen
            name="Search"
            options={{
              title: "",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#1363DF",
                color: "#fff",
              },
            }}
            component={Search}
          />
          <Stack.Screen
            name="Donate"
            options={{
              title: "",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#1363DF",
                color: "#fff",
              },
            }}
            component={Donate}
          />
          <Stack.Screen
            name="Sell"
            options={{
              title: "",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#1363DF",
                color: "#fff",
              },
            }}
            component={Sell}
          />
          <Stack.Screen
            name="Details"
            options={{
              title: "",
              headerTintColor: "#fff",
              headerStyle: {
                backgroundColor: "#1363DF",
                color: "#fff",
              },
            }}
            component={Details}
          />
        </Stack.Navigator>
        <Toast />
      </NavigationContainer>
  );
}
