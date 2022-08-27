import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Header() {
  return (
    <View style = {styles.headerBody}>
        <Text style= {styles.headerText}> TODOS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headerBody:{
        backgroundColor:"#66BFBF",
        marginTop:30,
        padding:20
    },
    headerText:{
        fontSize:20,
        color:"#EAF6F6",
        fontWeight:"bold",
    }
});
