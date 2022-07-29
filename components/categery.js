import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Items from './Items';

export default class Categery extends Component {
    render() {
        return (
            <ScrollView style={style.page}>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>
                    <View style={style.card}><Items /></View>


                    <View style={style.back}>
                        <Ionicons style={style.arrow} name="arrow-back-outline" size={40} color="#fff" />
                    </View>
            </ScrollView>
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
        position: 'fixed',
        bottom: 0,
        marginBottom: 31,
    },
    arrow: {
        padding: 6,
    },   
})