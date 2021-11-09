import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import ListStacK from './src/components/list/ListScreen';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Hello world!</Text>
        <Text style={styles.h2tittle}>by Eduardo Jami</Text>
        <ListStacK />
      </View>
    </NavigationContainer>
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
