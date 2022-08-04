import { StyleSheet, Text, View , Alert , Modal , Pressable, ScrollView, TextBase} from 'react-native';
import React, { useState, useEffect } from 'react';

const ModalTerms = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
                 <Text style={styles.modalText}>Terms Of Service</Text>
                 <Text style={styles.allText}>quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus</Text>
                 <Text style={styles.titleText}>Authorized Users</Text>
                 <Text style={styles.allText}>quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus</Text>
                 <View style={styles.ButtonsView}>
                    <Pressable style={[styles.button , {backgroundColor:'#1363DF'}]} onPress={() => {
                        setModalVisible(!modalVisible)
                    props.navigation.navigate('Profile')
                }
                    }>
                        <Text style={{color:'white' , fontSize:18, fontWeight:'600'}}>I Accept</Text>
                    </Pressable>
                    <Pressable style={[styles.button , {backgroundColor:'lightgray'}]} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{color:'black',fontSize:18 , fontWeight:'600'}}>I Decline</Text>
                    </Pressable>
                 </View>
                 
            </ScrollView>
          </View>
        </View>
      </Modal>
      <Pressable style={{marginTop:500 , backgroundColor:'red'}} onPress={() => setModalVisible(true)}>
        <Text>PRESS ME</Text>
    </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
centeredView:{
    alignItems:'center'
},
  modalView: {
    width:'90%',
    marginTop:25,
    marginBottom:25,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 22,
    shadowColor: "#1363DF",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    fontSize:25,
    fontWeight:'700'
  },
  allText:{
    fontSize:17,
    marginBottom:15
  },
  titleText:{
    fontSize:22,
    fontWeight:'500',
    marginBottom:25,
  },
  ButtonsView:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  button:{
    paddingTop:15,
    paddingBottom:15,
    marginRight:10,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:15,
  },
});


export default ModalTerms