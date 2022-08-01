import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Items extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require("../assets/whiteBg.jpeg")}
                    style={[style.image]} />
                <View>
                    <Text style={style.text}> Panadol</Text>
                    <Text style={style.text}> 10 EGP</Text>
                </View>
            </View>
        );
    }
}


const style = StyleSheet.create({

    image: {
        width: 130,
        height: 116,
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    text: {
        color: '#1363df',
        fontSize: 16,
        fontWeight: 500,
        paddingTop: 3,
        lineHeight: 18,
    },
})