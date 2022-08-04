import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AboutMe() {

    const content = `The demand for good-quality statistical data continues to increase. Timely and reliable statistics are key inputs to the broad development strategy. Improvements in the quality and quantity of data on all aspects of development are essential if we are to achieve the goal of a world without poverty.
    Good data are needed to set baselines, identify effective public and private actions, set goals and targets, monitor progress and evaluate impacts. They are also an essential tool of good government, providing means for people to assess what governments do and helping them to participate directly in the development process.`;
    const iconsColor = `#000`;
    const iconSize = 40;

    return (
        <View style={styles.page}>
            <View style={styles.back}>
                <Ionicons style={styles.arrow} name="arrow-back-outline" size={iconSize} color="#fff" />
            </View>
            <Text style={styles.header}>About Us</Text>
            <Text style={[styles.text, styles.content]}>{content}</Text>
            <View style={[styles.list,styles.content]}>
                <Text style={styles.text}>{'\u2023'}  aaaaa</Text>
                <Text style={styles.text}>{'\u2023'}  aaaaa</Text>
            </View>
            <View style={[styles.socialMedia,styles.content]}>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('fb://profile/?app_scoped_user_id=${YasRam102}')
                }}><Ionicons name="logo-facebook" size={iconSize} color={iconsColor} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('https://www.facebook.com/YasRam102/')
                }}><Ionicons name="logo-facebook" size={iconSize} color={iconsColor} /></TouchableOpacity>
                
                <TouchableOpacity onPress={() => {
                    Linking.openURL('whatsapp://send?text=Hi,I need help&phone=+201202016943')
                }}><Ionicons name="logo-whatsapp" size={iconSize} color={iconsColor} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('https://www.linkedin.com/in/YasRam/')
                }}><Ionicons name="logo-linkedin" size={iconSize} color={iconsColor} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('https://www.instagram.com/YasRam102/')
                }}><Ionicons name="logo-instagram" size={iconSize} color={iconsColor} /></TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Linking.openURL('https://twitter.com/YasRam102')
                }}><Ionicons name="logo-twitter" size={iconSize} color={iconsColor} /></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#1363df",
        padding: 34,
        backgroundSize: "cover",
        display: "flex",
        flex: 1,
    },
    header: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "500",
    },
    text: {
        fontSize: 20,
    },
    socialMedia: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    back: {
        backgroundColor: '#feb139',
        width: 55,
        height: 55,
        borderRadius: 30,
        position: 'fixed',
        left: 16,
        marginBottom: 31,
    },
    arrow: {
        padding: 6,
    },
    list: {
        fontSize: 20,
        flex: 1,
    },
    content: {
        paddingTop: 20,
    }
})