import { Image, StyleSheet, Text, View , TextInput , Keyboard , Pressable , TouchableWithoutFeedback, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons' 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const Register = (props) => {

    const [show , setShow] = useState(true);
    const [visibilityIcon , setVisibility] = useState('visibility');
    const [fullName , setFullName] = useState('');
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [view , setView] = useState(false);
    const [fullNameError , setFullNameError] = useState(false);
    const [emailError , setEmailError] = useState(false);
    const[emailRequired , setEmailRequired] = useState(false); 
    const [passwordError , setPasswordError] = useState(false);
    const [passwordRequiredError , setPasswordRequiredError] = useState(false);
    const [confirmPasswordError , setConfirmPasswordError] = useState(false);
    const [confirmPasswordRequiredError , setConfirmPasswordRequiredError] = useState(false);
    const [signupShow , setSignupShow] = useState(true);

    let valid = true;

    function validateRegister(){
        _checkFullName();
        _checkEmail();
        _checkPassword();
        _checkConfirmPassword();

        valid ? 
        
        setTimeout(()=>{
            setSignupShow(false);
            setTimeout(()=>{
                props.navigation.navigate('Profile')
                setSignupShow(true)
            }
                ,2000)}
            ,0) : console.log('valid is false')
    }

    function _checkFullName(){
        if(fullName.length === 0){
            setFullNameError(true);
            // setValid(false)
            valid = false;
        }
        else{
            setFullNameError(false);
            // setValid(true);
            valid = true;
        }
    }

    function _checkEmail(){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if(email.length === 0){
            setEmailRequired(true);
            setEmailError(false);
            valid = false;
        }
        else{
            setEmailRequired(false);
            if(reg.test(email) === false){
                setEmailError(!reg.test(email));
                valid = false;
            }
            else{
                setEmailError(false);
               valid = true;
            }
            
        }
        
    }

    function _checkPassword(){
        let regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        if(password.length === 0){
            setPasswordRequiredError(true);
            setPasswordError(false);
            valid = false;
        }
        else{
            setPasswordRequiredError(false)
            if(regularExpression.test(password) === false){
                setPasswordError(!regularExpression.test(password))
                valid = false;
            }
            else{
                setPasswordError(false);
                valid=true;
            }
        }
    }

    function _checkConfirmPassword(){
        if(confirmPassword.length === 0){
            setConfirmPasswordRequiredError(true);
            setConfirmPasswordError(false);
            valid = false;
        }
        else{
            setConfirmPasswordRequiredError(false)
            if(password !== confirmPassword){
                setConfirmPasswordError(true);
                valid = false;
            }
            else{
                setConfirmPasswordError(false);
                valid = true;
            };
        }
    }

    
    
    function _checkPasswords(){
        console.log('password:',password)
        console.log('confirm password', confirmPassword)
        if(password === '' && confirmPassword === ''){
            setView(false);
            console.log('BOTH EMPTY');
        }
        else{
            if(password === confirmPassword){
                setView(true)
                console.log('Equal')
            }
            else{ 
                setView(false);
            }
        }
    }

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
                <Image source={require('../assets/imgs/register_Head.png')}/>

                <View style={[styles.registerField]}>
                    <Text style={styles.textTitle}>Full Name</Text>
                    <View style={[styles.searchSection , fullNameError ? styles.Error : null]}>
                            <MaterialIcons name='person-outline' size={28} style={{paddingRight:15}}/>
                            <TextInput style={styles.input} placeholder='Full Name' onChangeText={setFullName} value={fullName}/>
                            {fullNameError ? <Ionicons name='md-alert-sharp' size={28} style={styles.searchIcon} color='red' onPress={_toggleVisibility}/> : null }
                    </View>
                    {fullNameError?<Text style={styles.ErrorMessage}>This Field is Required</Text>:null}
                </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Email</Text>
                    <View style={[styles.searchSection, emailError || emailRequired ? styles.Error : null]}>
                            <MaterialCommunityIcons name='email' size={23} style={{paddingRight:15}}/>
                            <TextInput style={styles.input} placeholder='Email Address' onChangeText={setEmail} value={email}/>
                            {emailError || emailRequired ? <Ionicons name='md-alert-sharp' size={28} style={styles.searchIcon} color='red' onPress={_toggleVisibility}/> : null }
                    </View>
                    {emailRequired?<Text style={styles.ErrorMessage}>This Field is Required</Text>:null}
                    {emailError?<Text style={styles.ErrorMessage}>Invalid Email</Text>:null}
                </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Password</Text>
                    <View style={[styles.searchSection, passwordError || passwordRequiredError ? styles.Error : null]}>
                            <MaterialCommunityIcons name='lock' size={23} style={{paddingRight:15}}/>
                            <TextInput style={styles.input} placeholder='Password' secureTextEntry={show} onChangeText={setPassword} value={password} />
                            <MaterialIcons name={visibilityIcon} size={28} style={styles.searchIcon} onPress={_toggleVisibility}/>
                            {passwordError || passwordRequiredError ? <Ionicons name='md-alert-sharp' size={28} style={styles.searchIcon} color='red' onPress={_toggleVisibility}/> : null }
                    </View>
                    {passwordRequiredError?<Text style={styles.ErrorMessage}>This Field is Required</Text>:null}
                    {passwordError?<Text style={styles.ErrorMessage}>Invalid Password</Text>:null}
                </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Confirm Password</Text>
                    <View style={[styles.searchSection, confirmPasswordError || confirmPasswordRequiredError ? styles.Error : null]}>
                            <MaterialCommunityIcons name='lock-check' size={23} style={{paddingRight:15}}/>
                            <TextInput style={styles.input} placeholder='Confirm Password' onChangeText={setConfirmPassword} value={confirmPassword} onKeyPress={_checkPasswords} secureTextEntry={true}/>
                            {view ? <MaterialCommunityIcons name='check-all' size={25}/> : null }
                            {confirmPasswordError || confirmPasswordRequiredError ? <Ionicons name='md-alert-sharp' size={28} style={styles.searchIcon} color='red' onPress={_toggleVisibility}/> : null }
                    </View>
                    {confirmPasswordRequiredError?<Text style={styles.ErrorMessage}>This Field is Required</Text>:null}
                    {confirmPasswordError?<Text style={styles.ErrorMessage}>Password Does Not Match</Text>:null}
                </View>
                <View style={styles.registerField}> 
                        <Pressable style={styles.button}>
                            {signupShow ? <Text style={styles.buttonText} onPress={()=>{
                            console.log("VALIDATING ...")
                            validateRegister();
                            }}>Sign Up</Text> : <ActivityIndicator size='large' color='#1363DF'/>}
                            
                        </Pressable>
                        <View style={styles.backButton}>
                        <TouchableWithoutFeedback onPress={()=>{console.log('Back is Pressed')}}><Text style={styles.backText}>Back</Text></TouchableWithoutFeedback>
                        </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
        
    </View>
  )
}

export default Register

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
    Error:{
        borderWidth:1.8,
        borderColor:'red',
    },
    ErrorMessage:{
        color:'red',
        marginTop:3,
        fontWeight:'500'
    },
})