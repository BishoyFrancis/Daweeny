import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';
import {Avatar} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons' 

const CustomDrawer = (props) => {
  return ( 
    <DrawerContentScrollView {...props} >
        <View style={[styles.container]}>
          <View style={styles.innerContainer}>
            <LinearGradient colors={['lightgreen' , 'yellow' , '#1363DF' ,'lightgreen' ,'#1363DF']} style={styles.outline}>
                <View style={styles.whiteOutline}>
                    <Avatar.Image size={120} source={require('../assets/imgs/avatar_cool.png')} style={{backgroundColor:'transparent'}}/>
                  </View>
              </LinearGradient>
              <Text style={styles.headTitle}>UserNameExample</Text>
              <View style={styles.badgeCenter}>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge1.png')}/>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge2.png')}/>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge3.png')}/>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge4.png')}/>
                    </View>
          </View>
        </View>
        <DrawerItemList {...props}/>
        <View style={styles.DrawerFooter}>
          <View>
            <TouchableOpacity>
              <View style={styles.innerFooter}>
                    <Ionicons name='share-social-outline' size={27} color='white'/>
                    <Text style={styles.FooterText}>Share To friends</Text>
                </View>
            </TouchableOpacity> 
            <TouchableOpacity>
                <View style={styles.innerFooter}>
                    <MaterialIcons name='logout' size={27} color='white'/>
                    <Text style={styles.FooterText}>Logout</Text>
                </View>
            </TouchableOpacity>
              
          </View>
        </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginTop:20,
    marginBottom:20,
  },
  innerContainer:{
    alignItems:'center',
    backgroundColor:'#1363DF',
    padding:10,
    margin:10,
    borderRadius:15,
  },
  whiteOutline:{
    justifyContent:'center',
    alignItems:'center',
    width:130,
    height:130,
    backgroundColor:'white',
    borderRadius:80,
},
outline:{
    justifyContent:'center',
    alignItems:'center',
    width:135,
    height:135,
    backgroundColor:'gray',
    borderRadius:82.5,
    marginBottom:10
},
headTitle:{
  color:'white',
  fontSize:25,
  fontWeight:'700', 
  textAlign:'center',
},
badgeCenter:{
  // backgroundColor:'#f8faf9',
  width:'90%',
  borderRadius:15,
  marginTop:20,
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'center',
  alignItems:'center',
},
Badge:{
  width:25,
  aspectRatio:1,
  margin:10,
},
DrawerFooter:{
  backgroundColor:'#1363DF',
  margin:10,
  borderRadius:10,
  marginTop:90,
},
innerFooter:{
flexDirection:'row',
alignItems:'center',
margin:10,
},
FooterText:{
  color:'white',
  fontSize:18,
  fontWeight:'500',
  paddingLeft:14
}

})