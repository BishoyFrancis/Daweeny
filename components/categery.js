import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Items from './Items';

export default class Categery extends Component {
    render() {
        return (
            <View
            
            
            
            
             style={style.page}>
                <ScrollView >
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                </ScrollView>
                <View style={style.back}>
                    <Ionicons style={style.arrow} name="arrow-back-outline" size={40} color="#fff" />
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({
    page: {
        // display:'flex',
        backgroundColor: "#1363df",
        flex: 1,
        // flexDirection:'row',
        padding: 34,
        // display:'grid',
        flexDirection: 'row',
        // justifyContent: 'space-between',
        boxsizing: 'borderbox',

    },
    card: {
        backgroundColor: "#fff",
        width: 130,
        height: 173,
        margin: 10,
        borderRadius: 10,
        padding: 10,
    },
    back: {
        backgroundColor: '#feb139',
        width: 55,
        height: 55,
        borderRadius: 30,
        position:'absolute' ,
        bottom: 0,
        left:16,
        marginBottom: 31,
        // position: absolute;
        // bottom: 8px;
        // left: 16px;
        // font- size: 18px;
},
    arrow: {
    padding: 6,
},
})