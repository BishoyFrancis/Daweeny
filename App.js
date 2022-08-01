import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './screens/Main';
import {IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import Form from './screens/Form';

const myIcon = <Icon name="rocket" size={30} color="#900" />;



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;