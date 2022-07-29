
import react, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Details from './components/details'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Items from './components/Items';
import Categery from './components/categery';


export default function App() {
  return (
    <ScrollView>
      <Details />
      {/* <Categery /> */}
    </ScrollView>
  );
}