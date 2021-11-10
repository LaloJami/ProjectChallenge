import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

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
