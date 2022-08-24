import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: "Farid",id:1},
    {name: "Amir",id:2},
    {name: "Alireza",id:3},
    {name: "Afshin",id:4},
    {name: "Rouzbeh",id:5},
    {name: "Maryam",id:6},
    {name: "Mehda",id:7},
    {name: "Amin",id:8},
    {name: "Nazi",id:9},
    {name: "Mahtab",id:10},
    {name: "Rozhan",id:11},
    {name: "Farnoosh",id:12},
    {name: "Hadi",id:13},
    {name: "Elahe",id:14},
  ])
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={3}
        keyExtractor={(item) => item.id }
        data={people}
        renderItem = {({item}) => (
          <Text style={styles.item}>{item.name}</Text>
        ) }
      />
      {/* <ScrollView>
        { people.map((p) => (
          <Viewid={pid}>
            <Text style={styles.item}>{p.name}</Text>
          </Viewid=>
        ))}
        
      </ScrollView> */}
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
    paddingVertical:20,
    paddingHorizontal:20,
    backgroundColor:"#89CFFD",
    // color:"#fff"
  }

});
