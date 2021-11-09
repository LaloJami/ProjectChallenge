import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToPage = (name) => {
    navigation.navigate(name)
  }
  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={()=> goToPage("Settings")} title="Ir a ajustes" />
      <Button onPress={()=> goToPage("List")} title="Ir a Lista" />
    </SafeAreaView>
  )
}
