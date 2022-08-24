import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState("Farid");
  const [person, setPerson] = useState({name: "Farnoush" , age:30});

  const clickHandler = () => {
    setName("Ops it's again King Farid");
    setPerson({name: "Elahe", age:31 });
  }
  return (
    <View style={styles.container}>
      <View>
        <Text>Ooops guess who wants to be a react native developer? correct the rocket: {name}</Text>
        <Text>her name is {person.name} and she is {person.age} years old</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Update the developer's name" onPress={clickHandler}/>
      </View>
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
  buttonContainer: {
    marginTop:20,
  }

});
