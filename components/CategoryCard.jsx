import React from "react";
import { Text, StyleSheet } from "react-native";


const styles =StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontFamily: "Poppins"
    }
}) 

const CategoryCard = () => {
    return <Text style={styles.textStyle}>This category Card</Text>
}


export default CategoryCard;