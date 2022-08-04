import React, { useState , useEffect } from "react";
import {TouchableOpacity , View , StyleSheet, Dimensions, Text, FlatList, Image, Button } from "react-native";
import Card from "./Card";

var {width}= Dimensions.get("window")

const ProductList = (props)=>{   
    const {item}= props;
  return(
    
        <View style={{width: width/2, backgroundColor:'#1363DF' }}>
            <Card {...item}/>  
        </View>
    
  )
}
export default ProductList;