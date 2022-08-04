
import react, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Details from './components/details'
import Items from './components/Items';
import Categery from './components/categery';
import Test from './components/test';
import AboutMe from './components/aboutMe';
import Terms from './components/trems';


export default function App() {
  return (
    <ScrollView>
      <AboutMe/>
      {/* <Terms/> */}
      {/* <Details /> */}
      {/* <Categery /> */}
      {/* <Test/> */}
    </ScrollView>
  );
}