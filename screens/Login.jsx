import { StyleSheet, Text, View , Image , Animated , Easing , ActivityIndicator , Vibration , TextInput , Keyboard, TouchableOpacity, Button, Pressable} from 'react-native';
import React, { useState, useEffect } from 'react';
import EntIcon from 'react-native-vector-icons/Entypo'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import axios from 'axios';


// import AuthGlobal from "../context/store/AuthGlobal";
// import {loginUser} from "../context/actions/Auth.actions"


const Login=({ navigation })=>{

    // const context = useContext(AuthGlobal)
    const [keyboardOffset , setKeyboardOffset] = useState(0);
    const [visibilityIcon , setVisibility] = useState('visibility');
    const [show , setShow] = useState(true);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');



    function _toggleVisibility(){
        if(show){
            setShow(false)
            setVisibility('visibility-off')
        }
        else{setShow(true)
        setVisibility('visibility')}
    }
    function _KeyboardDidshowAction(event){
        setKeyboardOffset(event.endCoordinates.height)
    }

    function _KeyboardDidHideAction(){
        setKeyboardOffset(0);
    }

    useEffect(()=>{
        // if(context.stateUser.isAuthenticated === true){
        //     navigation.navigate("Main")
        // }
        KeyboardDidshowListener = Keyboard.addListener('keyboardDidShow',_KeyboardDidshowAction);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide' , _KeyboardDidHideAction);
    },[])

    // context.stateUser.isAuthenticated

    const handleSubmit = ()=>{
        const user = {
            email: email,
            password: password
        }

        if (email === "" || password === ""){
            Toast.show({
                topOffset: 60,
                type: "error",
                text1:"Please enter email & password", 
                text2: "Please try again"
            }) 
        }else{
            axios
            .post('https://daweeny-server.herokuapp.com/daweeny/users/login', user)
            .then((res)=>{
                if(res.status == 200){
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1:"Login Succeeded"
                    })
                    setTimeout(()=>{
                        setTimeout(()=>{
                            navigation.navigate("Main");
                        }
                            ,200)}
                        ,0) 
                }
            }).catch((err)=>{
                Toast.show({
                    topOffset: 60,
                    type: "error",
                    text1:"Please enter valid email & password"
                })
            })
            // Toast.show({
            //     topOffset: 60,
            //     type: "success",
            //     text1:"Login Successed"
            // }); 
            // loginUser(user, context.dispatch);
            
        }
    }


    return(
        <View style={styles.container}>
            <View style={[styles.inner , {position:'relative' , bottom:keyboardOffset}]}>
                <Image source={require('../assets/imgs/Login_Head.png')}/>
                <View style={styles.loginField}>
                    <Text style={styles.textTitle}>Email</Text>
                    <View style={styles.searchSection}>
                        <EntIcon name='email' size={20} style={{paddingRight:15}}/>
                        <TextInput style={styles.input} placeholder='Email Address or Username' value={email} onChangeText={setEmail}/>
                    </View>
                </View>
                <View style={styles.loginField}>
                    <Text style={styles.textTitle}>Password</Text>
                    <View style={styles.searchSection}>
                        <AwesomeIcon name='user-lock' size={20} style={{paddingRight:15}}/>
                        <TextInput style={styles.input} placeholder='Password' secureTextEntry={show} onChangeText={setPassword} value={password}/>
                         <MaterialIcons name={visibilityIcon} size={28} style={styles.searchIcon} onPress={_toggleVisibility}/>
                    </View>
                </View>
                <View style={styles.loginField}> 
                        <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={()=>{
                            handleSubmit();
                            }}>Sign In</Text></TouchableOpacity>
                        <View style={styles.backButton}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Register")}}><Text style={styles.backText}>Don't Have an Account? Register</Text></TouchableOpacity>
                        </View>
                </View>

                
            </View>
            
        </View>
    )
}

export default  Login;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#1363DF',
    },
    inner:{
        flexDirection:'column',
        alignItems:'center',
        marginTop:70,
    },
    loginField:{
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

