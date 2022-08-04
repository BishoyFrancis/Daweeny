import React, { useState , useEffect } from "react";
import {ScrollView, View , StyleSheet, ActivityIndicator,Dimensions, Text, FlatList, Image } from "react-native";
import ProductList from '../components/ProductList'
import axios from 'axios'; 


var {width}= Dimensions.get("window")

 
const List = ()=>{   

  const[products, setProducts]=useState([]);

  useEffect(()=>{

    axios
        .get('https://daweeny-server.herokuapp.com/daweeny/products')
        .then((res)=>{
          setProducts(res.data);
        }).catch((err)=>{
          alert(err)
        })
    
    
    return ()=>{
      setProducts([])
    }
  },[])

  return (

    <View style={{flex:1}}>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({item})=><ProductList 
          key={item._id}
          item={item}
        />}
        keyExtractor={item => item._id}
      />
    </View>
    
  );
}
export default List;