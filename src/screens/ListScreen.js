import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ListScreen(props) {
  const { navigation } = props;

  const goToDetail = () => {
    navigation.navigate("SiteDetails")
  }
  return (
    <SafeAreaView>
      <Text>You are in ListScreen</Text>
      <Button onPress={goToDetail} title="Site Detail" />
    </SafeAreaView>
  )
}
