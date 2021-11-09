import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListStacK from './src/components/list/ListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Open up App.js to start working on your app!</Text>
      <Text style={styles.h2tittle}>Hello world!</Text>
      <Text style={styles.h2tittle}>by Eduardo Jami</Text>
      <ListStacK />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  h2tittle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff'
  }
});
