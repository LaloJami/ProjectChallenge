import React from 'react'
import { Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getSiteFavoriteApi } from '../api/Favorite';

export default function FavoriteScreen() {
  const checkFavorites = async () => {
    const response = await getSiteFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>FavoriteScreen</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  )
}
