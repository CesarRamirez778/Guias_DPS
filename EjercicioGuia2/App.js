import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import useState from "react"
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

Const form =>(){
  const[todos,setTodos]=useState([
    {todo: 'todo1'},
    {todo: 'todo2'},
    {todo: 'todo3'}
  ])
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        TO-DO LIST
      </Text>
      <Card>
       
      </Card>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
