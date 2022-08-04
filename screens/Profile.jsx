import { StyleSheet, Text, View , Image , ScrollView} from 'react-native'
import React from 'react'
import EntIcon from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Avatar} from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.innerContainer}>  
                <View style={styles.inner}>
                    <Text style={styles.headerText}>Profile</Text>
                    <MaterialIcons name='edit' size={25} color='white'/>
                </View>
                <View style={styles.info}>
                    <View style={styles.innerInfo}>
                        <LinearGradient colors={['lightgreen' , 'yellow' , '#1363DF' ,'lightgreen' ,'#1363DF']} style={styles.outline}>
                            <View style={styles.whiteOutline}>
                                <Avatar.Image size={150} source={require('../assets/imgs/avatar_cool.png')} style={{backgroundColor:'transparent'}}/>
                            </View>
                        </LinearGradient>
                    </View>
                    <Text style={styles.infoText}>Lorem ipsum dolor sit amet</Text>    
                    <Text style={styles.infoEmail}>email.example123@hotmail.com</Text>
                    <View style={styles.badgeCenter}>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge1.png')}/>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge2.png')}/>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge3.png')}/>
                        <Image style={styles.Badge} source={require('../assets/imgs/badge4.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.editSection}>
                <View style={styles.edit}>
                    <Text style={styles.editTitle}>General</Text>
                        <View style={styles.editField}>
                            <View style={styles.FieldIcon}>
                                <IonIcons name='settings' size={25} color='#1363DF'/>
                            </View>
                            <View style={styles.FieldText}>
                                <Text style={styles.FieldTextTitle}>Profile Settings</Text>
                                <Text style={styles.FieldTextDescription}>Update and modify your profile</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' size={35} color='#959aa0' style={{marginLeft:28}}/>
                        </View>
                        <View style={styles.editField}>
                            <View style={styles.FieldIcon}>
                                <MaterialCommunityIcons name='shield-check' size={25} color='#1363DF'/>
                            </View>
                            <View style={styles.FieldText}>
                                <Text style={styles.FieldTextTitle}>Privacy</Text>
                                <Text style={styles.FieldTextDescription}>Change your password</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' size={35} color='#959aa0' style={{marginLeft:68}} />
                        </View>
                        <View style={styles.editField}>
                            <View style={styles.FieldIcon}>
                                <MaterialIcons name='notifications' size={25} color='#1363DF'/>
                            </View>
                            <View style={styles.FieldText}>
                                <Text style={styles.FieldTextTitle}>Notifications</Text>
                                <Text style={styles.FieldTextDescription}>Change your Notifications settings</Text>
                            </View>
                            <MaterialIcons name='keyboard-arrow-right' size={35} color='#959aa0' style={{marginLeft:8}} />
                        </View>
                </View>
                
            </View>
        </View>
    </ScrollView>
    
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1363DF',
        width:'100%',
        height:'40%',
        borderBottomRightRadius:30,
        paddingTop:60,
    },
    innerContainer:{
        alignItems:'center',
        marginBottom:20,
    },
    inner:{
        width:'85%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        // backgroundColor:'red'
    },
    headerText:{
        color:'white',
        fontSize:25,
        fontWeight:'500',
        // letterSpacing:1,
    },
    info:{
        width:'85%',
        backgroundColor:'white',
        borderRadius:15,
        flexDirection:'column',
        alignItems:'center',
    },
    innerInfo:{
        marginTop:20,
        marginBottom:20,
    },
    whiteOutline:{
        justifyContent:'center',
        alignItems:'center',
        width:160,
        height:160,
        backgroundColor:'white',
        borderRadius:80,
    },
    outline:{
        justifyContent:'center',
        alignItems:'center',
        width:165,
        height:165,
        backgroundColor:'gray',
        borderRadius:82.5,
    },
    infoText:{
        color:'#37107d',
        fontSize:20,
        fontWeight:'500',
        marginBottom:10,
    },
    infoEmail:{
        color:'#959aa0',
        opacity:0.7,
    },
    badgeCenter:{
        backgroundColor:'#f8faf9',
        width:'90%',
        borderRadius:15,
        marginTop:20,
        marginBottom:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
    },
    Badge:{
        width:45,
        aspectRatio:1,
        margin:10,
    },
    editSection:{
        alignItems:'center',
    },
    edit:{
        width:'85%',
        justifyContent:'flex-start',
    },
    editTitle:{
        color:'#6e7580',
        fontSize:18,
        fontWeight:'500',
        opacity:0.7,
        marginBottom:15,
    },
    editField:{
        width:'100%',
        padding:10,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15    
    },
    FieldIcon:{
        backgroundColor:'#dfe6f8',
        padding:15,
        borderRadius:10,
        marginRight:25,
    },
    FieldText:{
        flexDirection:'column',
        justifyContent:'space-evenly'
    },
    FieldTextTitle:{
        color:'darkblue',
        fontSize:18,
        fontWeight:'600',
        marginBottom:3,
    },
    FieldTextDescription:{
        color:'#959aa0',
        opacity:0.9,
        fontSize:12,
        fontWeight:'400',
    },
})

