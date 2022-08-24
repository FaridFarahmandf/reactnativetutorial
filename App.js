import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "Farid", key:1},
    {name: "Amir", key:2},
    {name: "Alireza", key:3},
    {name: "Afshin", key:4},
    {name: "Rouzbeh", key:5},
    {name: "Maryam", key:6},
    {name: "Mehda", key:7},
    {name: "Amin", key:8},
    {name: "Nazi", key:9},
    {name: "Mahtab", key:10},
    {name: "Rozhan", key:11},
    {name: "Farnoosh", key:12},
    {name: "Hadi", key:13},
    {name: "Elahe", key:14},
  ])
  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map((p) => (
          <View key={p.key}>
            <Text style={styles.item}>{p.name}</Text>
          </View>
        ))}
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // textAlign:"center",
  },
  item: {
    margin:10,
    padding:20,
    backgroundColor:"#89CFFD",
    // color:"#fff"
  }

});
