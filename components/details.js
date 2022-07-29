import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Details extends Component {
    render() {
        return (
            <ScrollView style={style.page}>
                <Image
                    source={require("../assets/whiteBg.jpeg")}
                    style={[style.image]} />
                <View style={style.data}>
                    <Text style={style.text}> Panadol</Text>
                    <Text style={style.text}> 10 EGP</Text>
                </View>
                <Text style={style.text}> Exp.Date Nov 2023</Text>
                <View style={style.withIcon}>
                    <Ionicons name="location-sharp" color="#fff" size={32} style={style.text}></Ionicons>
                    <Text style={style.text}> Nasr City, Cairo</Text>
                </View>
                <View style={style.withIcon}>
                    <Ionicons name="call" size={32} color="green" style={style.text} />
                    <Text style={style.text}> 01201702790</Text>
                </View>
                <View style={style.back}>
                    <Ionicons style={style.arrow} name="arrow-back-outline" size={40} color="#fff" />
                </View>
            </ScrollView>
        );
    }
}


const style = StyleSheet.create({
    page: {
        backgroundColor: "#1363df",
        flex: 1,
        padding: 33,
    },
    image: {
        width: 306,
        height: 295,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: 'center',
    },
    text: {
        color: '#EEEEEE',
        fontSize: 20,
        fontfamily: 'Square Peg',
        fontWeight: 600,
        paddingTop: 22,
        lineHeight: 30,
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    back: {
        backgroundColor: '#feb139',
        width: 55,
        height: 55,
        borderRadius: 30,
        direction: "right",
        position: 'fixed',
        
        bottom: 0,
        marginBottom: 31,
    },
    arrow: {
        padding: 6,
    },
    withIcon: {
        flexDirection: 'row',
    },


})