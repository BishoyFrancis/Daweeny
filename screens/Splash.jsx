import { StyleSheet, Text, View , Image , Animated , Easing , ActivityIndicator , Vibration} from 'react-native';
import React, { useState, useEffect } from 'react';


const spinValue = new Animated.Value(0);
export default function Splash(props){
    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
            toValue: 1,
            duration: 3000,
            delay:1000,
            easing: Easing.cubic,
            useNativeDriver: true,
          }),{iterations:5}).start();
          console.log(props)
          setTimeout(()=>{
            props.navigation.navigate('Register')
          },4500)
      }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
      });
    

    return (
        <View style={styles.container}>
            <Animated.Image source={require('../assets/imgs/white.png')} style={{ transform: [{ rotate: spin }] , width:150 , height:150 , resizeMode:'contain'}}/>
            <Text style={styles.text}>
                Daweeny
            </Text>
            <ActivityIndicator size='large' color='white' style={{marginTop:20}} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#1363DF',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        // backgroundColor:'red'
    },
    text:{
        marginTop:20,
        color:'white',
        fontSize:50,
        // fontFamily:'QuicksandBold',
    },
});