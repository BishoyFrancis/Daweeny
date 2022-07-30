
import react, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Details from './components/details'
import Items from './components/Items';
import Categery from './components/categery';
import Test from './components/test';


export default function App() {
  return (
    <ScrollView>
      {/* <Details /> */}
      {/* <Categery /> */}
      <Test/>
    </ScrollView>
  );
}