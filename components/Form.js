import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function Form( {addTodoList} ) {
  const [todo, setTodo] = useState("")  
  return (
    <View style={styles.formContainer}>
        <Text style={styles.label}>Enter your todo: </Text>
        <TextInput
        style={styles.input}
        placeholder='e.g taking shower'
        onChangeText={(val) => {setTodo(val)}}
        />
        <Button 
        title="submit" 
        onPress={()=>{
            addTodoList(todo);
        }}    
        />
        
        
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer:{
        width:370,
        marginHorizontal:20,
        marginVertical:30,
        padding:30,
        borderStyle:"dashed",
        borderWidth:1,
        borderRadius:10
    },
    input:{
        paddingVertical:15,
        backgroundColor: "#E8F9FD",
        marginVertical:10,
    }
    
})
