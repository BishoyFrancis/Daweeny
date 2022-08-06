import React, { useState , useEffect } from "react";
import {TouchableOpacity , View , StyleSheet, Dimensions, Text, FlatList, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';


var {width}= Dimensions.get("window")

const Card = (props)=>{   

    const navigation = useNavigation(); 
    
    const {_id, name , image, category , country, city,price ,expirationDate }=props;
  return(
    <TouchableOpacity style={{width:'50%'}} onPress={() => navigation.navigate('Details',{_id:_id})}>
    <View style={styles.container}>
        <Image 
        style={styles.image} 
        source={{uri:image}}
        />
        <View style={styles.card} />
        
           
            <Text style={styles.title}>
            {name.length > 15? name.substring(0,19 -3)
                + '...' : name
            }
        </Text>
        
            <Text style={styles.price}>{price == 0? "FREE"
                : price + "EGP"
            }</Text>

        <Text style={styles.subTitle}>Exp.Date : {(moment(expirationDate).format("ll")).toLocaleString()}</Text>
        <Text style={styles.subTitle}>{city}, {country}</Text>
        
        
        {/* {(moment(expirationDate).format("ll")).toLocaleString()} */}
    </View>
    </TouchableOpacity>
  )
}
export default Card;


const styles = StyleSheet.create({
    container:{
        width: width/2 -30,
        height: width / 2,
        padding: 10,
        borderRadius: 10,
        margin: 15,
        alignItems:'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    image:{
        width: width/2 -30,
        height: width/2 -90,
        backgroundColor: 'transparent',
        position: 'absolute',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'contain'
        
        
    },
    card:{
        marginBottom:10,
        height: width/2 -20 -90,
        backgroundColor:'transparent',
        width: width/2-20-10
    },
    title:{
        fontWeight:"bold",
        fontSize:16,
        textAlign:"center",
        color:"#1363DF"
    },
    subTitle:{
       fontSize : 13,
       color: "gray",
       marginTop: 1
    },
    price:{
        fontSize : 18,
        fontWeight:"bold",
        color: "#FEB139",
        marginTop: 1,
        alignItems:'flex-end'
     }
})