import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

export default function ListScreen(props) {
  const { navigation } = props;

  const goToDetail = () => {
    navigation.navigate("Detail")
  }
  return (
    <SafeAreaView>
      <Text>You are in ListScreen</Text>
      <Button onPress={goToDetail} title="Site Detail" />
    </SafeAreaView>
  )
}
