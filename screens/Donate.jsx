
// , {position:'relative' , bottom:keyboardOffset}
import { TouchableOpacity,SafeAreaView,StatusBar,Platform ,Image, StyleSheet, Text, View , TextInput , Keyboard , Pressable , TouchableWithoutFeedback, Button, ToastAndroid } from 'react-native'
import React, { useState, useEffect, useRef, useCallback  } from 'react';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EntIcon from 'react-native-vector-icons/Entypo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import PhoneInput from "react-native-phone-number-input";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker";
import axios from 'axios';
import mime from 'mime';
import { Toast } from 'react-native-toast-message/lib/src/Toast';





const Donate = ({navigation}) => {

    const [name , setName] = useState('');
    const [error , setError] = useState('');
    const [category , setCategory] = useState('');
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState("");
    const [price, setPrice] = useState();
    const [city, setCity] = useState("");
    const [image, setImage]= useState();
    const [mainImage, setMainImage]= useState();
    const [token, setToken] = useState();
    const [item, setItem] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState();
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);

    useEffect(()=>{

        // AsyncStorage.getItem("jwt")
        // .then((res)=>{
        //     setToken(res)
        // })
        // .catch((err)=> console.log(err));

        (async () =>{
            if (Platform.OS !=="web"){
                const{
                    status,
                } = await ImagePicker.requestCameraPermissionsAsync();
                if(status !== "granted"){
                    alert("Sorry we need camera")
                }
            }
        })(); 
    },[]);
    
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        });
        console.log(result)
        if(!result.cancelled){
            setMainImage(result.uri);
            setImage(result.uri);
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    const checkValid = phoneInput.current?.isValidNumber(value);

    const addProduct= () =>{

        if(
            name == "" ||
            city == "" ||
            price == "" ||
            date == "" ||
            category== "" ||
            image == "" ||
            checkValid == false
        ){
            setShowMessage("Please fill in the form correctly")
        }

        const formData = new FormData();

        formData.append("image",{

            uri: image,
            type: mime.getType(image),
            name: image.split("/").pop()
        });
        formData.append("name",name);
        formData.append("city",city);
        formData.append("expirationDate",date);
        formData.append("category",category);
        formData.append("price",price);
        formData.append("phoneNumber",phoneNumber)

        const config ={
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }


        axios
            .post('https://daweeny-server.herokuapp.com/daweeny/products', formData, config)
            .then((res)=>{
                if(res.status == 200 || res.status ==201){
                    Toast.show({
                        topOffset: 60,
                        type: "success",
                        text1:"Thank you", 
                    })
                    setTimeout(()=>{
                        navigation.navigate('Main');
                    }, 200)
                }
            }).catch((err)=>{
                Toast.show({
                    topOffset: 60,
                    type: "error",
                    text1:"error", 
                })
            })

     }

  return (
    
    <View style={styles.container}>
        <KeyboardAwareScrollView>
        
            <View style={[styles.inner ]}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: mainImage}}/>
                <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                <Text style={{color:"#fff"}}><AwesomeIcon name='camera' size={20} style={{paddingRight:15}}/></Text>
                </TouchableOpacity>
            </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>Medicine Name</Text>
                    <View style={styles.searchSection}>
                            <TextInput style={styles.input} placeholder='Medicine Name' onChangeText={setName} value={name}/>
                    </View>
                </View>
                <View style={styles.registerField}>
                <Text style={styles.textTitle}>Category</Text>
                <Picker
                style={{borderRadius:10,backgroundColor:"#fff"}}
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) =>
                setCategory(itemValue)}>
                <Picker.Item label="Antibiotics" value="antibiotics" />
                <Picker.Item label="Pendemic" value="pendemic" />
                <Picker.Item label="Common" value="common" />
                <Picker.Item label="Special" value="special" />
                <Picker.Item label="Pain Relief" value="painrelief" />
                <Picker.Item label="Respiratory" value="respiratory" />
                <Picker.Item label="Eye" value="eye" />
                <Picker.Item label="Diabetes" value="diabetes" />
                <Picker.Item label="Cardiovascular" value="cardiovascular" />
                <Picker.Item label="First Aid" value="firstaid" />
                <Picker.Item label="Women" value="women" />
                <Picker.Item label="Oral" value="oral" />
                </Picker>
                </View>
                <View style={styles.registerField}>
                <Text style={styles.textTitle}>Expiration Date</Text>
                    <View style={styles.searchSection}>
                            <Text style={styles.input} placeholder='Expiration Date'>{(moment(date).format("ll")).toLocaleString()}</Text>
                            <TouchableOpacity onPress={showDatepicker}><MaterialIcons name='date-range' size={20} style={{paddingRight:15}}/></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.registerField}>
                    <Text style={styles.textTitle}>City</Text>
                    <View style={styles.searchSection}>
                            <TextInput style={styles.input} placeholder='City' onChangeText={setCity} value={city}/>
                    </View>
                </View>
                <View style={styles.registerField}>
                <Text style={styles.textTitle}>Phone Number</Text>
                <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="DM"
                layout="first"
                onChangeText={(text) => {
                setValue(text);
                }}
                onChangeFormattedText={(text) => {
                setPhoneNumber(text);
                }}
                
                />
                </View>
                <Text style={styles.textDanger}>{showMessage}</Text>
                <View style={styles.registerField}> 
                        <TouchableOpacity  style={styles.button}><Text style={styles.buttonText}  onPress={() => addProduct()}>Donate</Text></TouchableOpacity>
                        
                </View>
            </View>

            
      
        </KeyboardAwareScrollView>
        
    </View>
  )
}

export default Donate;

const styles = StyleSheet.create({
    imageContainer:{
        width:310,
        height:200,
        borderRadius:10,
        backgroundColor:"#fff",
        marginBottom:10
    },
    image:{
        width:"100%",
        height:"100%",
        borderRadius:10
    },
    imagePicker:{
        position:"absolute",
        right:5,
        bottom:5,
        padding:8,
        elevation:20,
        borderRadius:10,
        backgroundColor:"#FEB139",
        color:"#fff"
    },
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#1363DF',
    },
    inner:{
        flexDirection:'column',
        alignItems:'center',
        marginTop:10,
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
    textDanger:{
        color:'red',
        marginBottom:10,
        fontWeight:'600'
    },
    searchSection: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor:'white',
        height:50,
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
        marginTop:30,
        marginBottom:30
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