import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Todo({item, deleteHandler}) {
  return (
    <TouchableOpacity>
        <View style={styles.todo}>
            <Text style={styles.todoItem}>{item.name}</Text>
            <AntDesign name="delete" size={24} color="black" style={styles.delete} onPress={() => deleteHandler(item.key)}/>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    todo:{
        marginTop:15,
        backgroundColor:"#EAF6F6",
        padding:15,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
      },
      todoItem:{
        padding:10,
      },
      delete:{
        padding:10
      }
})