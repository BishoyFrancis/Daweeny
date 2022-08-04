import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {DrawerContentScrollView , DrawerItemList} from '@react-navigation/drawer';
import {Avatar} from 'react-native-paper'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
        <View style={styles.container}>
            <Avatar.Image size={150} source={require('../assets/imgs/avatar.png')} style={{backgroundColor:'transparent'}}/>
            </View>
            <DrawerItemList {...props}/>
        
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  }
})