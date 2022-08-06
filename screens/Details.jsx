import React,{ useState , useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Button, TouchableOpacity ,Linking} from "react-native";
import { useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import axios from 'axios'; 


export default function Details () {

    const route =useRoute();

    const[product, setProduct]=useState({});

  useEffect(()=>{

    

    axios
        .get(`https://daweeny-server.herokuapp.com/daweeny/products/${route.params._id}`)
        .then((res)=>{
            setProduct(res.data);
            
        }).catch((err)=>{
          alert(err)
        })
    
    return ()=>{
      
    }
  },[])

  const {name , image, category , country, city,price ,expirationDate }=product;

    return (
            
            <View style={style.page}>
                
                    <Image
                        source={{uri:image}}
                        style={[style.image]} />
                    <View style={style.data}>
                        <Text style={style.text}> {name}</Text>
                    </View>
                    <View style={style.data}>
                        <Text style={style.text}> Price</Text>
                        <Text style={style.text}> {price == 0? "FREE"
                    : product.price + " EGP"}</Text>
                    </View>
                    <View style={style.data}>
                        <Text style={style.text}> Exp.Date</Text>
                        <Text style={style.text}> {(moment(expirationDate).format("ll")).toLocaleString()}</Text>
                    </View>
                    <View style={style.data}>
                    <Ionicons name="location-sharp" color="#fff" size={32} style={style.text}></Ionicons>
                    <Text style={style.text}> {city}, {country}</Text>
                    </View>
                    <TouchableOpacity
                        style={style.button}
                        onPress={() => Linking.openURL(`tel:${product.phoneNumber}`)}>
                        <Ionicons name='call' size={25} color='#fff' />
                    </TouchableOpacity>

            </View>
        );
    }

    // {(moment(expirationDate).format("ll")).toLocaleString()}

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
        // backgroundColor: "#1363df",
        alignSelf: 'center',
    },
    data: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
        fontWeight:"bold",
        fontSize: 20,
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
        writingDirection: "right",
        position: 'absolute',
        marginBottom: 31,
        bottom: 0,
        left: 0,
    },
    arrow: {
        padding: 6,
    },


})