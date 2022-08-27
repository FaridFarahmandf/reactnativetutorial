import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        flexDirection:"row",
        backgroundColor:"#ddd",
        paddingTop:40,
        justifyContent:"space-evenly",
        alignItems:"flex-end",
        // marginTop:30,
        // height:400,
    },
    boxOne: {
        flex:2,
        padding:5,
        backgroundColor:"violet"
    },
    boxTwo: {
        flex:1,
        padding:10,
        backgroundColor:"gold"
    },
    boxThree: {
        flex:3,
        padding:15,
        backgroundColor:"coral"
    },
    boxFour: {
        flex:1,
        padding:20,
        backgroundColor:"skyblue"
    }
})