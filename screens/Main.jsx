import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";


const styles =StyleSheet.create({
    viewStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor:'#1363DF', 
        flex: 1, alignItems: 'center', 
        
         
    },


    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'left',
        color:'#fff',
        paddingVertical:20,
        paddingHorizontal: 20
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
        width:150,
        borderRadius:10,
        flexDirection:"row",
        justifyContent: 'space-between',
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
        width:100,
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
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Stop medication waste. 
            Save lives.</Text>
            <View style={{flexDirection:"row", alignContent: 'space-between'}}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Submit')}>
            <Text style={styles.textButtonStyle}>Donate</Text>
            <Image  source={require('../assets/Donate.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textButtonStyle}>Sell</Text>
            <Image  source={require('../assets/sell.png')}/>
            </TouchableOpacity>
            </View>
            
            <View>
            <View style={{flexDirection:"row", alignItems: 'space-between'}}>
            <Text style={{fontSize:24, fontWeight:'bold', color:'#fff',paddingHorizontal:7, paddingVertical:20}}>Shop by Category
            </Text>
                <IconButton icon={props => <Icon name="magnify" {...props} color="white" size={50} />} />
            </View>
            
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} >
            <Image  source={require('../assets/anti.png')}  style={styles.imageStyle}/>
            <Text style={styles.textCardStyle}>Antibiotics </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/covid.png')}/>
            <Text style={styles.textCardStyle}>Pendemic Essentials </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/common.png')}/>
            <Text style={styles.textCardStyle}>Common Symptoms </Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} >
            <Image  source={require('../assets/special.png')}/>
            <Text style={styles.textCardStyle}>Specialty Medications </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/pain.png')}/>
            <Text style={styles.textCardStyle}>Pain Relief </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/resp.png')}/>
            <Text style={styles.textCardStyle}>Respiratory
Medications </Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} >
            <Image  source={require('../assets/eye.png')}/>
            <Text style={styles.textCardStyle}>Eye 
Medications </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/diab.png')}/>
            <Text style={styles.textCardStyle}>Diabetes Care </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/heart.png')} style={styles.imageStyle}/>
            <Text style={styles.textCardStyle}>Cardiovascular Treatments </Text>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", alignItems: 'space-between' }}>
            <TouchableOpacity style={styles.cardStyle} >
            <Image  source={require('../assets/aid.png')}/>
            <Text style={styles.textCardStyle}>First Aid </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/woman.png')} style={styles.imageStyle}/>
            <Text style={styles.textCardStyle}>Women’s Care </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardStyle}>
            <Image  source={require('../assets/teeth.png')}/>
            <Text style={styles.textCardStyle}>Oral Care </Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
      );
}


export default Main;