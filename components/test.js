import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Items from './Items';

export default function Example() {
  const [items, setItems] = React.useState([
    { name: 'Panadol ', price: ' 10 EGP', code: '#1abc9c', img: '../assets/whiteBg.jpeg' },
    { name: 'Panadol ', price: ' 10 EGP', code: '#1abc9c', img: '../assets/whiteBg.jpeg' },
    { name: 'Panadol ', price: ' 10 EGP', code: '#1abc9c', img: '../assets/whiteBg.jpeg' },
    { name: 'Panadol ', price: ' 10 EGP', code: '#1abc9c', img: '../assets/whiteBg.jpeg' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <View style={styles.page}>
      <Text style={styles.head}>Common Symptoms</Text>
      <FlatGrid
        data={items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Items style={styles.card} />
          </View>
        )}
      />
      <View style={styles.back}>
        <Ionicons style={styles.arrow} name="arrow-back-outline" size={40} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1363df',
    padding: 25,
  },
  head: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 500,
    paddingBottom: 30,
    lineHeight: 36,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff'
  },
  card: {
    // backgroundColor: "#000",
    // width: 130,
    // height: 173,
    // margin: 10,
    // borderRadius: 10,
    // padding: 10,
  },
  back: {
    backgroundColor: '#feb139',
    width: 55,
    height: 55,
    borderRadius: 30,
    position: 'fixed',
    bottom: 0,
    left: 16,
    marginBottom: 31,
    // bottom: 8px;
    // left: 16px;
    // font- size: 18px;
  },
  arrow: {
    padding: 6,
  },
  LeftbuttonContainer: {
    // position: 'absolute',
    // bottom: 0,
    // right: 0, 
    // left: 0,
    // height: 100,
    // borderWidth: 2,
    // borderColor: 'blue',
    // backgroundColor: 'white',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});



// import React, { Component } from 'react';
// import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Items from './Items';

// export default class Categery extends Component {
//     render() {
//         return (
//             <View style={style.page}>
//                 <ScrollView >
//                     <View style={style.card}><Items /></View>
//                     <View style={style.card}><Items /></View>
//                     <View style={style.card}><Items /></View>
//                     <View style={style.card}><Items /></View>
//                     <View style={style.card}><Items /></View>
//                     <View style={style.card}><Items /></View>
//                 </ScrollView>
//                 <View style={style.back}>
//                     <Ionicons style={style.arrow} name="arrow-back-outline" size={40} color="#fff" />
//                 </View>
//             </View>
//         );
//     }
// }


// const style = StyleSheet.create({
//     page: {
//         // display:'flex',
//         backgroundColor: "#1363df",
//         flex: 1,
//         // flexDirection:'row',
//         padding: 34,
//         // display:'grid',
//         flexDirection: 'row',
//         // justifyContent: 'space-between',
//         boxsizing: 'borderbox',

//     },
//     card: {
//         backgroundColor: "#fff",
//         width: 130,
//         height: 173,
//         margin: 10,
//         borderRadius: 10,
//         padding: 10,
//     },
//     back: {
//         backgroundColor: '#feb139',
//         width: 55,
//         height: 55,
//         borderRadius: 30,
//         position:'absolute' ,
//         bottom: 0,
//         left:16,
//         marginBottom: 31,
//         // position: absolute;
//         // bottom: 8px;
//         // left: 16px;
//         // font- size: 18px;
// },
//     arrow: {
//     padding: 6,
// },
// })