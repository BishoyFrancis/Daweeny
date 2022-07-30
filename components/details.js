import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Details extends Component {
    render() {
        return (
            <View style={style.page}>
                <ScrollView>
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

                    <TouchableOpacity
                        style={style.button}
                        onPress={() => this.signInFacebook(context.updateAuthUser)}>
                        <Ionicons name='call' size={25} color='#fff' />
                    </TouchableOpacity>

                    <TouchableOpacity style={style.back}>
                        <Ionicons style={style.arrow} name="arrow-back-outline" size={40} color="#fff" />
                    </TouchableOpacity>
                </ScrollView>

            </View>
        );
    }
}


const style = StyleSheet.create({
    page: {
        display:'flex', 
        backgroundColor: "#1363df",
        flex: 1,
        padding: 33,
        position: 'relative',
    },
    image: {
        width: 306,
        height: 295,
        borderRadius: 10,
        backgroundColor: "#fff",
        alignSelf: 'center',
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#EEEEEE',
        fontSize: 20,
        fontfamily: 'Square Peg',
        fontWeight: 600,
        paddingTop: 22,
        lineHeight: 30,
    },
    withIcon: {
        flexDirection: 'row',
    },
    button: {
        marginTop: 28,
        borderRadius: 10,
        paddingVertical: 16,
        backgroundColor: '#feb139',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    back: {
        backgroundColor: '#feb139',
        width: 55,
        height: 55,
        borderRadius: 30,
        direction: "right",
        position: 'absolute',
        marginBottom: 31,
        bottom: 0,
        left: 0,
    },
    arrow: {
        padding: 6,
    },


})