import React, { useState , useEffect } from "react";
import {ScrollView, View , StyleSheet, ActivityIndicator,Dimensions, Text, FlatList, Image, Animated , Easing , Vibration , TextInput , Keyboard, TouchableWithoutFeedback, Button, Pressable } from "react-native";
import ProductList from '../components/ProductList'
import EntIcon from 'react-native-vector-icons/Entypo'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'; 


var {width}= Dimensions.get("window")


const Search = ()=>{   

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

    <View style={{flex:1, backgroundColor:"#1363DF"}}>
    
      <FlatList
        style={{backgroundColor:"#1363DF"}}
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
export default Search;

// http://localhost:3000/daweeny/products?name=${name}


const styles = StyleSheet.create({
    loginField:{
        backgroundColor:'#1363DF',
        width:'80%',
        marginBottom:30,
    },
    textInput:{
        width:'100%',
        paddingLeft:50,
        height:50,
        backgroundColor:'white',
        borderRadius:10,
    },
    textTitle:{
        color:'white',
        marginBottom:10,
        fontWeight:'600',
    },
    button:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        height:55,
        borderRadius:15,
        marginTop:55,
    },
    buttonText:{
        color:'#1363DF',
        fontSize:20,
        fontWeight:'600'
    },
    backButton:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:25,
    },
    backText:{
        color:'white',
        fontSize:20,
        fontWeight:'400',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'white',
        height:50,
        borderRadius:10,
        padding:10,
    },
    input:{
       flex:1,
    }
})

