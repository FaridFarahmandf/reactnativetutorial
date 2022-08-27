import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Form from './components/Form';
import Header from './components/Header';
import Sandbox from './components/Sandbox';
import Todo from './components/Todo';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [todo, setTodo] = useState([
    {name: "ordering coffee", key:1},
    {name: "playing tennis", key:2},
    {name: "eating pizza", key:3},
    {name: "going to the gym", key:4},
  ])

  const deleteHandler = (id) => {
    console.log(id);
    setTodo((prevTodo) => {
      return prevTodo.filter((t) => t.key != id);
    })
  }

  const addTodoList = (str) => {

    if(str.length > 3){
      const newTodos = [{name:str, key:Math.random()*1000}, ...todo];
      setTodo(newTodos);
    }else{
      Alert.alert(
        "Oops!!!", 
        "Your todos must be more than 3 characters", 
        [{text:"OK",onPress:() => console.log("understood that")}]
      );
    }
  }
  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form addTodoList={addTodoList}/>
          <View style={styles.list}>
            <FlatList 
              data={todo}
              renderItem={ ( { item } ) => (
                <Todo item={item} deleteHandler={deleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex:1,
    // backgroundColor:"skyblue",
  },
  list: {
    flex:1, 
    // backgroundColor:"green", 
    paddingHorizontal:20,
    paddingVertical:10,
  },
});
