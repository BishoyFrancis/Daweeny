import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Terms() {

    const content = `To use this application please follow this conditions:`;
    const iconsColor = `#000`;
    const iconSize = "40";
    return (
        <View style={styles.page}>
            <View style={styles.back}>
                <Ionicons style={styles.arrow} name="arrow-back-outline" size={40} color="#fff" />
            </View>
            <Text style={styles.header}>Terms & conditions</Text>
            <Text style={[styles.text, styles.content]}>{content}</Text>
            <View style={[styles.list,styles.content]}>
                <Text style={styles.text}>{'\u2023'}  You should be bigger than 18 years old.</Text>
                <Text style={styles.text}>{'\u2023'}  Don't publish any mislead information.</Text>
                <Text style={styles.text}>{'\u2023'}  Do not post any false information.</Text>
                <Text style={styles.text}>{'\u2023'}  Do not post any inappropriate pictures.</Text>
                <Text style={styles.text}>{'\u2023'}  Make your information clear and explicit.</Text>

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
        fontSize: 32,
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
        bottom:0,
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