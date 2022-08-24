import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState("Farid");
  const [age, setAge] = useState(25);
  return (
    <View style={styles.container}>
      <Text>Enter the name: </Text>
      <TextInput 
        multiline
        style = {styles.input}
        onChangeText = {(val) => setName(val)}
        placeholder = "e.g Farid"
      />
      <Text>Enter the age: </Text>
      <TextInput 
        multiline
        keyboardType='numeric'
        style = {styles.input}
        onChangeText = {(val) => setAge(val)}
        placeholder = "e.g 25"
      />
      <Text> Name: {name} , age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:"center",
  },
  input: {
    padding:10,
    margin:8,
    backgroundColor:"#a7a7a7",
    border:1,
    color:"#fff"
  }

});
