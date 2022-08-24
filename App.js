import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstView}>
        <Text style={styles.boldText}> HELLO, WORLD</Text>
      </View>
      <View style={styles.secondView}>
        <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab.</Text>
        <Text style={styles.boldText}> Lorem ipsum <Text>dolor sit amet consectetur</Text> adipisicing elit. Nobis, ab.</Text>
        <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab.</Text>
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
  },
  firstView: {
    backgroundColor: "pink",
    padding:20,
  },
  secondView: {
    backgroundColor: "yellow",
    padding: 20,
    // fontWeight:"bold",
  },
  boldText:{
    fontWeight:"bold",
  },
});
