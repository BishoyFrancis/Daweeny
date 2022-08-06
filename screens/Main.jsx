import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import List from "./List";


const styles =StyleSheet.create({
    viewStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor:'#1363DF', 
        flex: 1, 
        alignItems: 'center'
        
         
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'#fff'
        
    },
    textButtonStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#1363DF',
       
    },

    textCardStyle: {
        fontSize: 13,
        textAlign:'center',
        fontWeight: 'bold',
        color:'#1363DF',
       
    },

    buttonStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor:'#fff',
        color:'#1363DF',
        height:70,
        width:170,
        borderRadius:10,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:10,
        marginHorizontal:10
    },

    searchButtonStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor:'#fff',
        color:'#1363DF',
        height:50,
        width:365,
        borderRadius:10,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:10,
        marginHorizontal:10
    },

    cardStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor:'#fff',
        color:'#1363DF',
        height:100,
        width:114,
        borderRadius:10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:5,
        paddingVertical:10,
        margin:5
    },
    imageStyle:{
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }

}) 

const Main = ({ navigation }) => {
    return (
        
        <View style={{flex: 1}} >
            <View style={{backgroundColor:'#1363DF', paddingHorizontal:18, paddingVertical:10}}>
                <Text style={styles.textStyle}>Stop medication waste</Text>
                <Text style={styles.textStyle}>Save lives</Text>
            </View>
            <View style={styles.viewStyle}>
            

            <View style={{flexDirection:"row", alignContent: 'space-between'}}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Donate')}>
            <Text style={styles.textButtonStyle}>Donate</Text>
            <Image  source={require('../assets/Donate.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Sell')}>
            <Text style={styles.textButtonStyle}>Sell</Text>
            <Image  source={require('../assets/sell.png')}/>
            </TouchableOpacity>
            </View>
            
            <View style={{paddingBottom:15 }}>
            <Text style={{fontSize:24, fontWeight:'bold', color:'#fff',paddingHorizontal:7, paddingVertical:10}}>Shop by Category</Text>
            
            
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"antibiotics" })}>
            <Image  source={require('../assets/anti.png')}  style={styles.imageStyle}/>
            <Text style={styles.textCardStyle}>Antibiotics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"pendemic" })}>
            <Image  source={require('../assets/covid.png')}/>
            <Text style={styles.textCardStyle}>Pendemic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"common" })}>
            <Image  source={require('../assets/common.png')}/>
            <Text style={styles.textCardStyle}>Common</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"special" })}>
            <Image  source={require('../assets/special.png')}/>
            <Text style={styles.textCardStyle}>Special</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"painrelief" })}>
            <Image  source={require('../assets/pain.png')}/>
            <Text style={styles.textCardStyle}>Pain Relief </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"respiratory" })}>
            <Image  source={require('../assets/resp.png')}/>
            <Text style={styles.textCardStyle}>Respiratory</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"eye" })}>
            <Image  source={require('../assets/eye.png')}/>
            <Text style={styles.textCardStyle}>Eye</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"diabetes" })}>
            <Image  source={require('../assets/diab.png')}/>
            <Text style={styles.textCardStyle}>Diabetes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"cardiovascular" })}>
            <Image  source={require('../assets/heart.png')} style={styles.imageStyle}/>
            <Text style={styles.textCardStyle}>Cardiovascular</Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"firstaid" })}>
            <Image  source={require('../assets/aid.png')}/>
            <Text style={styles.textCardStyle}>First Aid </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"women" })}>
            <Image  source={require('../assets/woman.png')} style={styles.imageStyle}/>
            <Text style={styles.textCardStyle}>Women</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle} onPress={() => navigation.navigate('List',{name:"oral" })}>
            <Image  source={require('../assets/teeth.png')}/>
            <Text style={styles.textCardStyle}>Oral</Text>
            </TouchableOpacity>
            </View>
            </View>
            <TouchableOpacity style={styles.searchButtonStyle} onPress={() => navigation.navigate('Search')}>
            <Text style={styles.textButtonStyle}>Available</Text>
            </TouchableOpacity>
            </View>
            
        </View>   
      );
}


export default Main;