import { Image, StyleSheet, Text, View , TextInput , Keyboard , Pressable , TouchableWithoutFeedback} from 'react-native'
import React, { useState, useEffect } from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EntIcon from 'react-native-vector-icons/Entypo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Sell = () => {

    const [show , setShow] = useState(true);
    const [visibilityIcon , setVisibility] = useState('visibility');
    const [fullName , setFullName] = useState('');
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [view , setView] = useState(false)


    function _toggleVisibility(){
        if(show){
            setShow(false)
            setVisibility('visibility-off')
        }
        else{setShow(true)
        setVisibility('visibility')}
    }


  return (
    
    <View style={styles.container}>
        <KeyboardAwareScrollView>
            <View style={[styles.inner ]}>


                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Medicine Name</Text>
                    <View style={styles.searchSection}>
                           
                            <TextInput style={styles.input} placeholder='Full Name' onChangeText={setFullName} value={fullName}/>
                    </View>
                </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Email</Text>
                    <View style={styles.searchSection}>
                            <TextInput style={styles.input} placeholder='Email Address' onChangeText={setEmail} value={email}/>
                    </View>
                </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Password</Text>
                    <View style={styles.searchSection}>
                           
                            <TextInput style={styles.input} placeholder='Password' secureTextEntry={show} onChangeText={setPassword} value={password} />
                    </View>
                </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Confirm Password</Text>
                    <View style={styles.searchSection}>
                           
                            <TextInput style={styles.input} placeholder='Confirm Password' onChangeText={setConfirmPassword} value={confirmPassword} onKeyPress={()=>{

                            }}/>
                            {view ? <MaterialCommunityIcons name='check-all' size={25}/> : null }
                            
                    </View>
                </View>
                <View style={styles.registerField}> 
                        <Pressable style={styles.button}><Text style={styles.buttonText} onPress={()=>{console.log("Sign in Pressed")}}>Sell</Text></Pressable>
                        
                </View>
            </View>
        </KeyboardAwareScrollView>
        
    </View>
  )
}

export default Sell;

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
    registerField:{
        width:'80%',
        marginBottom:8,
    },
    textTitle:{
        color:'white',
        marginBottom:10,
        fontWeight:'600'
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
    },
    button:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        height:55,
        borderRadius:15,
        marginTop:45,
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
})


// , {position:'relative' , bottom:keyboardOffset}